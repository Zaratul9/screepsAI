var respawnHarvester = {

    /** @param {Creep} creep **/
    run: function () {

            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                {memory: {role: 'harvester', energySource: ""}});
    }
};
module.exports = respawnHarvester;