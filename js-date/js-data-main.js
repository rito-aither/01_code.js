process.stdin.resume();
process.stdin.setEncoding(‘utf8’);

process.stdin.on(‘data’, function(sentens) {
var line = sentens.toString().split(“\n”);
line.pop();
line = line.toString().split(“,”);

console.log(line);

});