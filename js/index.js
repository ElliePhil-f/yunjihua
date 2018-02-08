
window.onload=function(){
  schedule();
  setInterval(cvsBaiyun(),500);
  cvsShubiao();
  var i=0;
  var timer=setInterval(function(){
    if(i==3){
      i=0;
      $('.bgcarousel ul').css({'margin-left':-i*100+'%'});
    }
    i++;
    $('.bgcarousel ul').animate({'margin-left':-i*100+'%'},1000);
  },2000)
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
}
function schedule(){
  $('.blue-onload span').animate({ 
    width: "100%",
  }, 5000 );
  setTimeout(function(){
    $('.schedule .sc-logo .gounian').animate({ 
      opacity: 1,
    }, 3000 );
    $('.schedule .sc-logo .jingcai').animate({ 
     opacity: 1,
   }, 3000 );
  },1000)
  setTimeout(function(){
    $('.schedule').css({
      'opacity': 0,
      'transition': 'all 2s'
    })
    setTimeout(function(){
      $('.schedule').css({
        'display': 'none',
      })
    },2000);
  },5000);
}
function loadImage(images,callback){
  var allImg ={};
  var imgNum =0;
  var loadedImg = 0;
  for(var key in images){
    imgNum++;
    var img = new Image();
    img.src = images[key];
    allImg[key]=img;
    img.onload=function(){
      loadedImg++;
      if(loadedImg>=imgNum){
        callback(allImg);
      }
    }
  }
}
function cvsBaiyun(){
  var cvs=document.getElementById('cvs');
  var ctx=cvs.getContext('2d');
  cvs.width = screen.width;
  cvs.height = screen.height;
  loadImage({
    baiyun1:'../images/baiyun1.png',
    baiyun2:'../images/baiyun2.png'
  },function(images){
    var img1=images.baiyun1;
    var img2=images.baiyun2;
    var baiyun= new Baiyun(ctx,img1,20);
    var baiyun1= new Baiyun(ctx,img1,20);
    var baiyun2= new Baiyun(ctx,img1,20);
    var baiyun3= new Baiyun(ctx,img1,20);
    var baiyun4= new Baiyun(ctx,img1,20);
    var baiyun5= new Baiyun(ctx,img1,20);
    var baiyun6= new Baiyun(ctx,img1,20);
    var baiyun7= new Baiyun(ctx,img1,20);
    var baiyun8= new Baiyun(ctx,img1,20);
    var baiyun9= new Baiyun(ctx,img1,20);
    var baiyun10= new Baiyun(ctx,img1,20);
    setInterval(function(){
      ctx.clearRect(0,0,screen.width,screen.height);
      baiyun.draw();
      baiyun.update();
      baiyun1.draw();
      baiyun1.update();
      baiyun2.draw();
      baiyun2.update();
      baiyun3.draw();
      baiyun3.update();
      baiyun4.draw();
      baiyun4.update();
      baiyun5.draw();
      baiyun5.update();
      baiyun6.draw();
      baiyun6.update();
      baiyun7.draw();
      baiyun7.update();
      baiyun8.draw();
      baiyun8.update();
      baiyun9.draw();
      baiyun9.update();
      baiyun10.draw();
      baiyun10.update();
      ctx.beginPath();
    },60)
  });
}
function Baiyun(ctx,img,speed,x,y){
    this.ctx=ctx;
    this.img=img;
    this.width=this.img.width;
    this.height=this.img.height;
    this.speed=speed;
    this.x=x;
    this.y=y;
    this.x1=Math.random()*screen.width;
    this.y1=Math.random()*screen.height;
    this.z1=Math.floor(Math.random()*3);
}
Baiyun.prototype.draw=function(){
  this.ctx.save();
  this.ctx.drawImage(
    this.img,
    0,
    0,
    this.width,
    this.height,
    -this.width*2*this.z1+this.x1+this.speed,
    -this.height*2*this.z1-this.y1+this.speed,
    this.width*2*this.z1,
    this.height*2*this.z1
    );
  this.ctx.restore();
}
Baiyun.prototype.update=function(){
      this.speed+=10;
      if((-this.width*2*this.z1+this.x1+this.speed)>=screen.width){
        this.x1=Math.random()*screen.width;
        this.speed=0;
      }
      if((-this.height*2*this.z1-this.y1+this.speed)>=screen.height/2*3){
        this.speed=0;
      }
}
function cvsShubiao(e){
  var cvs=document.getElementById('cvs1');
  var ctx=cvs.getContext('2d');
  cvs.width = screen.width;
  cvs.height = screen.height; 
  $('#cvs1').on('mousemove',function(e){
    // var e = event || window.event;
    // var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    // var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    // var x = e.pageX || e.clientX + scrollX;
    // var y = e.pageY || e.clientY + scrollY;
    var x=e.pageX;
    var y=e.pageY;
    var radius=Math.floor(Math.random()*20);
    var x1=x+Math.floor(Math.random()*30);
    var y1=y+Math.floor(Math.random()*30);
    var x2=x-Math.floor(Math.random()*50);
    var y2=y-Math.floor(Math.random()*50);  
    ctx.arc(x,y,radius,0,360);
    ctx.fillStyle='#f9d423';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x1,y1,radius,0,360);
    ctx.fillStyle='#fe4e50';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x2,y2,radius,0,360);
    ctx.fillStyle='#4caf50';
    ctx.fill();
    ctx.closePath();
    setTimeout(function(){
      cvs=document.getElementById('cvs1');
      ctx=cvs.getContext('2d');
      cvs.width = screen.width;
      cvs.height = screen.height; 
    },2000);
  })
}
