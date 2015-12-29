#!/usr/bin/env node
// This hook copies various resource files
// from our version control system directories
// into the appropriate platform specific location

module.exports = function(context) {
    var filesToCopy = [
    {
        "assets/android/SubTube/loading/layout/loading.xml":
        "platforms/android/res/layout/loading.xml"
    },
    {
        "assets/android/SubTube/loading/loading-240x320-crystallize.png":
        "platforms/android/res/drawable-nodpi/loading.png"
    } ];

    var fs = require('fs');
    var path = require('path');

    // no need to configure below
    var rootDir = context.opts.projectRoot;

    filesToCopy.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            var srcFile = path.join(rootDir, key);
            var destFile = path.join(rootDir, val);
            var destDir = path.dirname(destFile);

            if (fs.existsSync(srcFile)&&fs.existsSync(destDir)) {
                console.log("copying " + srcFile + " to " + destFile);
                fs.createReadStream(srcFile).pipe(
                   fs.createWriteStream(destFile));
            }
        });
    });
}
