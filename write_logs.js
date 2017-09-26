var fs = require("fs");

var path = "./output.txt";

function writeTextFile(filepath, output){
    fs.writeFile(filepath,output);
}

var arrLogData = [
    {text: "log text : priority 2", priority: 2},
    {text: "log text : priority 3", priority: 3},
    {text: "log text : priority 1", priority: 1},
    {text: "log text : priority 5", priority: 5},
    {text: "log text : priority 4", priority: 4}
];

arrLogData = arrLogData.sort(function(a, b) {return b.priority - a.priority;}).map(function (t) { return t.text });
writeTextFile(path, arrLogData.join("\n"));
