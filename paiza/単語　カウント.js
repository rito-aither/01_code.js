process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！


process.stdin.on('data', function (chunk) {
    var line = chunk.toString().split('\n');
    line     = line.toString().split(",");
    line.pop();
    line     = line.toString().split(" ");
  
   // var ans1 = parseInt(line[0], 10);
    //var ans2 = parseInt(line[1],10);
    //var ans  = ans1+ans2;
 //console.log(line);
     
 
ansa();

function ansa(){
    var cosarray = [];
    var enter= [] ;

 for (i=0;i<line.length;i++){
         var cons =0 ;
        
        
     for(j=0;j<line.length;j++){
             
    
        if (line[i]==line[j]) cons++ ;
        var consle = cosarray.length ;
        
  //     cosarray[consle] =cons ;
     //  console.log(consle);
        }
      //  console.log(cons);
      cosarray.push(cons);
    }
  for(k=0;k<line.length;k++){
  enter[line[k]] = cosarray[k];
  
  }
  /*for(l=0;l<enter.length;l++)
  {
      console.log(enter[l]);
  }*/
  for(var pname in enter){
  console.log(pname ,enter[pname] );
}
  
  
 // console.log(cosarray);
 // console.log(enter);  
}

    
});

