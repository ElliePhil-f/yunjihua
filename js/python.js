// console.log($("div.nav"))
$(window).on("scroll",function(){
  var scrollTop=$(document).scrollTop()||$("body").scrollTop();
  // console.log(scrollTop);
  if(scrollTop>=728){
    $("div.nav").css({width:"100%",position:"fixed",top:"0px",left:"0px"})
  }else{
    $("div.nav").css({position:"relative",top:"0px",left:"0px",'z-index':1000})
  }
})
