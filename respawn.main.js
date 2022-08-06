const respawnHarvester = require("respawn.harvester");
const respawnBuilder = require("respawn.builder");
const respawnUpgrader = require("respawn.upgrader");
const respawnSpawner = require("respawn.spawner");


var respawnMain= {
    run: function (maxCreeps) {


        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester').length;
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder').length;
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader').length;
        var amount_of_energy = Game.spawns["Spawn1"].store.getUsedCapacity(RESOURCE_ENERGY);
        var totalCreeps = harvesters + builders + upgraders;
        var spawnActive = Game.spawns['Spawn1'].isActive();

        if (amount_of_energy >= 200 && spawnActive && totalCreeps <= maxCreeps) {

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