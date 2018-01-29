var cvs, td, cx, cy, cw, ch ;
  
onload = function() {
  cvs = document.getElementById("Canvas");
  td = cvs.getContext("2d");
  cw = cvs.width; ch = cvs.height;
  cx = cvs.offsetLeft; cy = cvs.offsetTop;
  cvs.onclick = main;
};
function main(e) {
    var x1, y1;
    var i = random();
   x1 = e.pageX; y1 = e.pageY;
    
    if(i==0){        
  td.beginPath();
  td.fillStyle = "rgb(" + rnd() + "," + rnd() + "," + rnd() + ")";      
  td.moveTo(x1,y1);
  td.lineTo(x1-90,y1-90);
  td.lineTo(x1-10,y1-90);
  td.closePath();
  td.fill();         }else{
  
  td.beginPath();
  td.fillStyle = "rgb(" + rnd() + "," + rnd() + "," + rnd() + ")";
  td.arc(x1 - cx, y1 - cy, 20, 0, Math.PI * 2);
  td.fill();
        }


}
function rnd() {
  return String(Math.floor(Math.random()*256));
}
function random(){
  return String(Math.floor(Math.random()*2));

}

function cvsClear() {
  td.clearRect(0, 0, cw, ch);
}