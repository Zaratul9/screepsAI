const respawnHarvester = require("respawn.harvester");
const respawnBuilder = require("respawn.builder");
const respawnUpgrader = require("respawn.upgrader");
const respawnSpawner = require("respawn.spawner");
const respawnAttacker = require("respawn.attacker");

const allocateSource = require("find.source");

var respawnMain= {
    run: function (maxCreeps) {
        allocateSource.run()

        var spawn = Game.spawns['Spawn1'];
        var attackers = spawn.room.find(FIND_HOSTILE_CREEPS, {
            filter: (creep) => {
                return creep.getActiveBodyparts(ATTACK) +  creep.getActiveBodyparts(RANGED_ATTACK) > 0;
            }
        });
        var beingAttacked = false
        if (attackers > 0) {
            beingAttacked = true
        }



        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester').length;
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder').length;
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader').length;
        var amount_of_energy = Game.spawns["Spawn1"].store.getUsedCapacity(RESOURCE_ENERGY);
        var totalWorkerCreeps = harvesters + builders + upgraders;
        var spawnActive = Game.spawns['Spawn1'].isActive();

        if (beingAttacked && amount_of_energy >= 300) {
            respawnAttacker.run()
            beingAttacked = false
        }

        if (amount_of_energy >= 200 && spawnActive && totalWorkerCreeps < maxCreeps && !beingAttacked) {

            //find lowest amount and increase creep amount
            if (harvesters <= builders && harvesters <= upgraders) {
                respawnHarvester.run()
            }
            else if (upgraders <= builders) {
                respawnUpgrader.run()
            }
            else {
                respawnBuilder.run()
            }
            respawnSpawner.run()
        }
    }
};
module.exports = respawnMain;