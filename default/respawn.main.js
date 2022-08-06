const respawnHarvester = require("respawn.harvester");
const respawnBuilder = require("respawn.builder");
const respawnUpgrader = require("respawn.upgrader");
const respawnSpawner = require("respawn.spawner");

var respawnMain= {
    run: function () {


        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
        var amount_of_energy = Game.spawns["Spawn1"].store.getUsedCapacity(RESOURCE_ENERGY)
        var spawnActive = Game.spawns['Spawn1'].isActive()

        if (amount_of_energy >= 200 && spawnActive) {

            //find lowest amount and increase creep amount
            if (harvesters.length <= builders.length && harvesters.length <= upgraders.length) {
                respawnHarvester.run()
            }
            else if (upgraders.length <= builders.length) {
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