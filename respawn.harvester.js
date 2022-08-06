var respawnHarvester = {

    /** @param {Creep} creep **/
    run: function () {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        //console.log('Harvesters: ' + harvesters.length);

            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                {memory: {role: 'harvester'}});
    }
};
module.exports = respawnHarvester;