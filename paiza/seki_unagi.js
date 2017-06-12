process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(sentens) {
var line = sentens.toString().split("\n");
line.pop();
line = line.toString().split(" ");
line = line.toString().split(",");

var n =line[0], m=line[1];
    n= Number(n);
var seki[n.1]=" " ;

//seki_length_array = new Array(line[0]);
//Array.apply(null, new Array(5)).map(Number.prototype.valueOf,0);


/* for (i=0;i<n;i++){
    
    seki[i] == " "   ;
}
*/






console.log(n);

console.log(seki);

});