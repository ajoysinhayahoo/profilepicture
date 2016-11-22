/**
 * http://usejsdoc.org/
 */

#!/usr/bin/env node

var SimpleDeployment = require("codedeploy-scripts").SimpleDeployment;
var deployment = new SimpleDeployment({
    appName: "profilepicture",
    nodePort: "8181",
    serverScript: "server.js",
    domains: "deploytest.example.com",
/*    buildFolder: "build",
    staticFolder: "static"*/
});
deployment.run();
