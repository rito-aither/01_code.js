process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(sentens) {
var line = sentens.toString().split("\n");
line.pop();
line = line.toString().split(" ");
line = line.toString().split(",");

var n =line[0], m=line[1];

var seki = [];

//seki_length_array = new Array(line[0]);
//Array.apply(null, new Array(5)).map(Number.prototype.valueOf,0);


 for (i=0;i<n;i++){
    
    seki[i] = "0"  ;
}

label:

for (i=3;i<line.length;i=i+2){
    
   // console.log(i);
    
    
        
        for(j=0;j<line[i-1];j++){
           
            
        
            
           
            
             for(k=0;k<line[i-1];k++){
             var ss_2=Number(line[i])+Number(j);
            
        
            
                if(seki[ss_2]===1)　break label ;
          
             } 
             
             var ss=Number(line[i])+Number(j);
                seki[ss]="1" ;
            
        
        } 
        
       
    
    
       
}






//seki.shift();

//ansa(seki);


console.log(seki);

});


function ansa(arr){
    var cosarray = [];
    var enter= [] ;

 for (i=0;i<arr.length;i++){
         var cons =0 ;
        
        
     for(j=0;j<arr.length;j++){
             
    
        if (arr[i]==arr[j]) cons++ ;
       // var consle = cosarray.length ;
        
  //     cosarray[consle] =cons ;
     //  console.log(consle);
        }
      //  console.log(cons);
      cosarray.push(cons);
    }
  for(k=0;k<arr.length;k++){
  enter[arr[k]] = cosarray[k];
  
  }
  /*for(l=0;l<enter.length;l++)
  {
      console.log(enter[l]);
  }*/
 // enter.pop() ;
  /*for(var pname in enter){
  console.log(pname ,enter[pname] );
}*/

console.log(enter[1]);
}
