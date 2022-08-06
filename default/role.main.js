const roleHarvester = require("./role.harvester");
const roleUpgrader = require("./role.upgrader");
const roleBuilder = require("./role.builder");
const roleMiner = require("./role.miner")

const findSource = require("find.source")

var roleMain = {
    run: function () {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
                findSource.findAllocationAmounts(creep)
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            if (creep.memory.role == "miner") {
                roleMiner.run(creep);
            }
        }
    }
}
module.exports = roleMain;