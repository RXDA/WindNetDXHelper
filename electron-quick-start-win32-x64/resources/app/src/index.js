// function messageshow(type) {
//     if(document.getElementById(type+"_message").style.display=='none'){
//         document.getElementById(type+"_message").style.display='';
//     }else{
//         document.getElementById(type+"_message").style.display='none';
//     }
// }
// document.addEventListener("DOMContentLoaded",function () {
//     try{
//         var menuElem = document.getElementById("menu");
//         window.onscroll=function(){
//             menuElem.style.left = -window.pageXOffset+'px';
//             menuElem.style._left = -window.pageXOffset+'px';
//         }
//     }catch(e){
//         alert(e)
//     }

// })

$(document).ready(function(){
    $("li").click(function(){
        var url=$(this).attr("myhref");
        $("#rightpage").attr("data",url);
    });
  });
  
