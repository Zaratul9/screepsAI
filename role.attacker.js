var roleAttacker = {
    run: function (creep) {
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            console.log("tracking target")
            if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                console.log("moving")
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}
module.exports = roleAttacker