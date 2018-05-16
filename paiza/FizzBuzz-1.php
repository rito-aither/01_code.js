<?php
    // 自分の得意な言語で
    // Let's チャレンジ！！

    $input_lines = fgets(STDIN);
    
    
    for($i=1 ; $i<$input_lines+1 ;$i++){
        
        if( $i%15==0){
            
             
                print("Fizz Buzz\n");
                
               
            
            
        }else{
        
            switch ($i) {
                case $i%3==0 ;
                    print ("Fizz\n");
                    
                    break;
                
                case $i%5==0;
                    print ("Buzz\n");
                    
                    break;
                
                
               
                default ;
                
                print($i."\n");
                
                break ;
            }           
        }
    }
?>