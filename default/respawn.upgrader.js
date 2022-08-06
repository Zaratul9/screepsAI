var respawnUpgrader = {

    /** @param {Creep} creep **/
    run: function () {
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        //console.log('Upgrader: ' + upgraders.length);

        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
            {memory: {role: 'upgrader'}});
    }
};
module.exports = respawnUpgrader;