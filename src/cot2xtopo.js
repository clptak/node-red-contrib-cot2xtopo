const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    const subflowFileA = path.join(__dirname,"cot2xtopo.json");
    const subflowContentsA = fs.readFileSync(subflowFileA);
    const subflowJSONA = JSON.parse(subflowContentsA);
    RED.nodes.registerSubflow(subflowJSONA);
    const subflowFileB = path.join(__dirname,"xtopo2cot.json");
    const subflowContentsB = fs.readFileSync(subflowFileB);
    const subflowJSONB = JSON.parse(sublflowContentsB);
    RED.nodes.registerSubflow(subflowJSONB);
}
