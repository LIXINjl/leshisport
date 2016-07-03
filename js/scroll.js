~function(){

    var bigWrap=document.getElementsByClassName('bigWrap');
    var strong=document.getElementsByClassName('strong');
    var anchor=document.getElementById('anchor');
    var oLis=anchor.getElementsByTagName('li');
    var winH=utils.win("clientHeight");

    var innerBox=document.getElementById("innerBox")

    window.onscroll=function(){
        var winB=document.body.scrollTop;
        for(var j=0;j<oLis.length;j++){
            oLis[j].className="side-li";
        }
        if(winB<=0){
            oLis[0].className="side-active";
            oLis[0].children[0].children[0].style.display="none"
        }
        if(winB>0&&winB<winH){
            oLis[1].className="side-active";
            oLis[1].children[0].children[0].style.display="none"
        }else if(winB>winH&&winB<2*winH){
            oLis[2].className="side-active";
            oLis[2].children[0].children[0].style.display="none"
        }else if(winB>2*winH&&winB<3*winH){
            oLis[3].className="side-active";
            oLis[3].children[0].children[0].style.display="none"
        }else if(winB>3*winH){
            oLis[4].className="side-active";
            oLis[4].children[0].children[0].style.display="none"
        }

    };
    for(var i=0;i<5;i++){
        oLis[i].index=i;
        oLis[i].onclick=function(){
            for(var j=0;j<oLis.length;j++){
                oLis[j].className="side-li";
            }
            zhufengAnimate(innerBox,{top:-winH*this.index},300);
            this.className="side-active";
        };
       oLis[i].onmouseover=function(){
            this.children[0].children[0].style.display="block"
       };
        oLis[i].onmouseout=function(){
            this.children[0].children[0].style.display="none"
        }

    }

    var totalTop= 0,step= 0,timer=0;
    bigWrap.onmousewheel=function(e){
        e=e||window.event;

        timer=window.setTimeout(function(){
            onscroll(e);
        },120)
    };




}();