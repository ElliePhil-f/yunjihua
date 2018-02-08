function fun1(){
  var i=0;
  var timer=setInterval(function(){
    i++;
    $('.carousel ul').css({'margin-left':-i+'px'});
    if(i==1200){
      i=-1200; 
      var timer2=setInterval(function(){
        i++;
        $('.carousel ul').css({'margin-left':i+'px'});
        if(i==0){
          fun1();
          clearInterval(timer2);
        }
      },50)
      clearInterval(timer);
    }
  },50)
}
fun1();
$(window).on('scroll',function(){
  var scrollTop=$(document).scrollTop()||$('body').scrollTop();
  if(scrollTop>=400){
    $('.back').css({"display":"block"});
  }else{
    $('.back').css({"display":"none"});
  }
})
