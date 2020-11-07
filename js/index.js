//появление и скрытие левого меню
function index() {
  
function menuleft(){

 $("#mob_kn").click(function(){
   var menu_left = $("#mob_menu").css("marginLeft")
   if (menu_left == "-10000px") {
     $("#mob_kn").css({
       transform: "rotate(-90deg)",
       transition: "transform 1s"
     })
     $("#mob_menu").animate({ "marginLeft": "10px" }, 800)
   } else if (menu_left == "10px") {
     $("#mob_kn").css({
       transform: "rotate(0deg)",
       transition: "transform 1s"
     })
     $("#mob_menu").animate({ "marginLeft": "-10000px" }, 800)
   }
   })
 }
 // Пагинация
function parinationColor(clase, back, col) {
  var ul = document.getElementsByClassName(clase)[0];
  if (ul !== undefined) {
    var a = ul.getElementsByTagName('a');
    var c = {
      bcolor: back,
      acolor: col,
      url: document.documentURI,
      a: a,

    }
    for (var i = 0; i < c.a.length; i++) {
      var ahref = c.a[i].href;
      if (ahref == c.url) {
        c.a[i].style.backgroundColor = c.bcolor;
        c.a[i].style.color = c.acolor;
      }
    }
  }
}
 //Рекламма 
function reklama_php() {
  $(".reklama").append("<div></div>");
var div = $(".reklama div");
var a = $(".reklama a");
var len = a.length;
var reklama = $('.reklama'); 
    if(len == 0){
 
reklama.css({display:"none"});
    
}
$(".reklama").addClass("text");    


}


$(document).ready(function () {
  parinationColor('pages', '#ec7616', '#ffffff');
  parinationColor('menu-top', '', '#EB7123');
  parinationColor('mob_menu', '', '#EB7123');
  menuleft();
  $("h1, h2 ").css({
    color: "#0088cc",
    fontWeight: "bold",
    fontFamily: "Noto Serif"
  })
  reklama_php();
 
 });



}
index();










