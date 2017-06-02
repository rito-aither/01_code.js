process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！


process.stdin.on('data', function (chunk) {
    var line = chunk.toString().split('\n');
   // var ans1 = parseInt(line[0], 10);
    //var ans2 = parseInt(line[1],10);
    //var ans  = ans1+ans2;
//line.shift();     
     
line.sort(function(a,b){
        return a - b;
});

ansa();

function ansa(){
    
 for (i=0;i<line.length;i++){
        console.log(line[i]);
    }
    
}
    console.log(line);
});

