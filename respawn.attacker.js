var respawnAttacker = {

    /** @param {Creep} creep **/
    run: function () {
        var newName = 'Attacker' + Game.time;
        console.log('Spawning new attacker: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, RANGED_ATTACK, MOVE, MOVE], newName,
            {memory: {role: 'attacker'}});
    }
};
module.exports = respawnAttacker;