var respawnMiner = {

    /** @param {Creep} creep **/
    run: function () {
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        //console.log('Harvesters: ' + harvesters.length);

            var newName = 'Miner' + Game.time;
            console.log('Spawning new miner: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                {memory: {role: 'miner'}});
    }
};
module.exports = respawnMiner;