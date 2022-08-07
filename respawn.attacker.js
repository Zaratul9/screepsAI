var respawnAttacker = {

    /** @param {Creep} creep **/
    run: function () {
        var newName = 'Attacker' + Game.time;
        console.log('Spawning new attacker: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([RANGED_ATTACK, MOVE], newName, // may want to add TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE
            {memory: {role: 'attacker'}});
    }
};
module.exports = respawnAttacker;