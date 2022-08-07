var respawnBuilder = {

    /** @param {Creep} creep **/
    run: function () {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        //console.log('Builders: ' + builders.length);

            var newName = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                {memory: {role: 'builder', energySource: ""}});
    }
};
module.exports = respawnBuilder;