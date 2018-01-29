process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(sentens) {
var line = sentens.toString().split("\n");
line.pop();
line = line.toString().split(" ");
line = line.toString().split(",");
var cons =0;
var ans =0 ;
var res = 0;

for(i=0;i<line.length;i++)
{
    cons = cons+ Number(line[i]);
    
}

ans =cons/line.length;

res = Math.round( ans * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 );

/*console.log(line.length);
console.log(ans);
console.log(cons);*/
console.log(res);

});