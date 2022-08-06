//import modules for roles
const roleMain = require("role.main");
    //harvester
    //upgrader
    //builder
    //attacker

//import rest of modules for main
const respawnMain = require("respawn.main");
const cleanMemory = require("module.cleanMemory");


module.exports.loop = function () {
    //Pseudo code for screeps ai

    //console.log(Game.cpu.getUsed())




    //clean memory: every tick
        //might change this to after creep is detected as missing rather than every tick
    cleanMemory.run()

    //module: every 20 ticks: room layout/ graph theory code for better optimization and routing
        //autogen base layout based on graph created in higher step return graph for lower a* implementation
            //save to a log file every time it is run and created for future deep learning implementation
                //log all stats to an easy-to-understand file format for future data analytics and deep learning
            //make and remember construction sites for all static buildings


    //tower management module: make this a for loop that automatically iterates over the towers in screeps

    //auto-spawning code for init setup of screeps room

    //auto-spawning of dead creeps module
    respawnMain.run()

    //logic for room upgrades/expansions to the room controller

    //implement logic for screep management
    roleMain.run()
        //custom a* pathfinding with weighted distances make into a function and into its own module
            //harvesters module
            //upgraders module
            //builders module
            //attacker module

}