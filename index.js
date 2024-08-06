// document.getElementById('playbutton').addEventListener('click',()=>{
//     console.log("被点击了");
// })
let autoplay=true;

function playAndPause(){
    if(!playState){
        $('#playbutton').text('停止播放');
        document.getElementById('music').play();
     }else{
        $('#playbutton').text('开始播放');
        document.getElementById('music').pause();
        document.getElementById('music').currentTime=0;
       
     }
     playState=!playState;
}
$(document).ready(function(){  
//    playAndPause();
});
let playState=false;
$('#playbutton').click(function() {  
     playAndPause();
  });  
