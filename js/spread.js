for(var i=1;i<6;i++){
    new Spread('open-wrapper'+i,'close'+i,'bigBox'+i,'new'+i,i-1)
}




function Spread(open,close,bigBox1,new1,num) {

    var openWrapper = document.getElementById(open),
        joinInfo = document.getElementsByClassName('floatMin')[num],
        close = document.getElementById(close),
        bigBox = document.getElementById(bigBox1);
        new1 = document.getElementById(new1);

    close.onclick = function () {
        zhufengAnimate(bigBox, {left: 0,width:0,height:0,margin:0}, 200, ["Quint", "easeInOut"], function () {
            close.style.display = "none";
            openWrapper.style.display = "block";
            this.style.overflow="hidden";
        });
        zhufengAnimate(joinInfo, {bottom: 60}, 200)
    };
    openWrapper.onclick = function () {
        var clientW=document.documentElement.clientWidth||document.body.clientWidth;
        var res=clientW*0.5;
        var w=new1.offsetWidth;
        var h=new1.offsetHeight;
        zhufengAnimate(bigBox, {left: res,width:w,height:h,marginLeft:-w/2}, 200, ["Quint", "easeInOut"], function () {
            close.style.display = "block";
            this.style.overflow="";
            openWrapper.style.display = "none";

        });
        zhufengAnimate(joinInfo, {bottom: 361}, 200)
    };
}












