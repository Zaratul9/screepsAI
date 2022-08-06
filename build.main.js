const buildExtension = require("build.extension");
const buildContainer = require("build.container")

var buildMain = {
    run: function () {
        buildExtension.run()
        buildContainer.run()
    }
}