var allocateSource = {


    run: function () { //may need to pass creep and enable the creep.memory.source line
        var sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES)
        for (var gameCreeps in Game.creeps) {
            try {
                //console.log(gameCreeps, Game.creeps[gameCreeps].memory.energySource)
                if (Game.creeps[gameCreeps].memory.energySource == "") {
                    for (var source in sources) {
                        //find how many creeps can harvest from a node
                        var sourceAllocation = parseInt(Game.spawns["Spawn1"].memory[sources[source].id]) + 1
                        var creepsAllocatedToSource = _.filter(Game.creeps, (creep) => creep.memory.energySource === sources[source].id).length;
                        //console.log(sourceAllocation, creepsAllocatedToSource, sources[source].id)
                        if (sourceAllocation >= creepsAllocatedToSource) {
                            Game.creeps[gameCreeps].memory.energySource = sources[source].id
                            console.log("writing memory", sources[source].id, gameCreeps)
                            break
                        }
                    }
                }
            } catch (error){
                console.log(error)
            }

        }
    },

    // may need to pass creep and activate line 1 and disable line 2
    findAllocationAmounts: function () {
        //var sources = creep.room.find(FIND_SOURCES);
        var sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES)
        var sourceAllocation = {}
        for (var source in sources) {
            //find how many creeps can harvest from a node
            var allocationAmount = 0
            var surroundingTerrainx = [[],[],[]]
            var surroundingTerrainy = [[],[],[]]
            var sourcex = sources[source].pos.x
            var sourcey = sources[source].pos.y
            var terrain = new Room.Terrain(sources[source].pos.roomName)
            var surroundingTerrain = [[],[],[]]

            surroundingTerrainx[0][0] = sourcex - 1
            surroundingTerrainy[0][0] = sourcey - 1

            surroundingTerrainx[0][1] = sourcex
            surroundingTerrainy[0][1] = sourcey - 1

            surroundingTerrainx[0][2] = sourcex + 1
            surroundingTerrainy[0][2] = sourcey - 1

            surroundingTerrainx[1][0] = sourcex - 1
            surroundingTerrainy[1][0] = sourcey

            surroundingTerrainx[1][1] = sourcex
            surroundingTerrainy[1][1] = sourcey

            surroundingTerrainx[1][2] = sourcex + 1
            surroundingTerrainy[1][2] = sourcey

            surroundingTerrainx[2][0] = sourcex - 1
            surroundingTerrainy[2][0] = sourcey + 1

            surroundingTerrainx[2][1] = sourcex
            surroundingTerrainy[2][1] = sourcey + 1

            surroundingTerrainx[2][2] = sourcex + 1
            surroundingTerrainy[2][2] = sourcey + 1

            //console.log(surroundingTerrainx, surroundingTerrainy)

            for (var i = 0; i < surroundingTerrainx.length; i++) {
                for(var j = 0; j < surroundingTerrainx[i].length; j++) {
                    surroundingTerrain[i][j] = terrain.get(surroundingTerrainx[i][j], surroundingTerrainy[i][j])
                }
            }

            for (var k = 0; k < surroundingTerrain.length; k++) {
                for(var l = 0; l < surroundingTerrain[k].length; l++) {
                    if (surroundingTerrain[k][l] === 0) {
                        allocationAmount++
                    }
                }
            }
            //console.log(source.id)
            Game.spawns["Spawn1"].memory[sources[source].id] = allocationAmount
            sourceAllocation[source] = allocationAmount
        }
        
        return sourceAllocation;
    }
}
module.exports = allocateSource;