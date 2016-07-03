new Lei("content1", 3000, 0);
new Lei("content2", 2500, 1);
new Lei("content3", 2800, 2);
new Lei("content4", 2200, 3);
new Lei("content5", 2600, 4);
function Lei(id, times, m) {
    /*整屏-大背景焦点图 begin*/
    //大图选择
    var oContent1 = document.getElementById(id);
    var oFocus = oContent1.getElementsByTagName("div")[0];
    var oAs = oFocus.getElementsByTagName('a');
    //小图选择
    var oPic = oContent1.getElementsByTagName("div")[1];
    var oUl = oPic.getElementsByTagName('ul')[0];
    var oLis = oUl.getElementsByTagName('li');
    var oImgs = oLis[0].getElementsByTagName('img');
//自动播放的轮播图
    var step = 0;
    var autoTimer = null;
    zhufengAnimate(oAs[0], {'opacity': 1}, 800);
    utils.css(oAs[0], "zIndex", 1);
    autoTimer = setInterval(autoMove, times);

    function autoMove() {
        if (step >= oAs.length - 1) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0; i < oAs.length; i++) {
            var curA = oAs[i];
            oDiv[i].style.display = "none";
            if (i === step) {
                utils.css(curA, 'zIndex', 1);
                oDiv[i].style.display = "block";
                zhufengAnimate(curA, {'opacity': 1}, 1500, function () {
                    var siblings = utils.siblings(this);
                    for (var i = 0; i < siblings.length; i++) {
                        utils.css(siblings[i], 'opacity', 0);
                        //zhufengAnimate(siblings[i],{'opacity':0},800);
                    }
                });
                continue;
            }
            utils.css(curA, 'zIndex', 0);
        }
        bannerTip();
        //handleChange();
    }

//焦点图自动轮播
    function bannerTip() {
        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            i === step ? utils.addClass(curLi, 'bg') : utils.removeClass(curLi, 'bg');
        }
    }

//点击焦点，手动切换    中间的标签栏也跟随轮播
    /*handleChange();
     function handleChange(){
     for(var i=0;i<oLis.length;i++){
     var curLi=oLis[i];
     curLi.index=i;
     curLi.onmouseover=function(){
     step=this.index;
     setBanner();
     }
     }
     }
     var oFloat=document.getElementsByClassName('floatMin')[0];
     var oDiv=oFloat.getElementsByTagName('div');
     for(var i=0;i<oLis.length;i++){
     oLis[i].index=i;
     oDiv[0].style.display="block";
     oLis[i].onmouseover=function(){
     clearInterval(autoTimer);
     for(var j=0;j<oDiv.length;j++){
     oDiv[j].style.display="none";
     }
     oDiv[this.index].style.display="block";
     }
     }*/
    var oFloat = document.getElementsByClassName('floatMin')[m];
    var oDiv = oFloat.getElementsByTagName('div');
    handleChange();
    function handleChange() {
        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            curLi.index = i;
            oDiv[0].style.display = "block";
            curLi.onmouseover = function () {
                clearInterval(autoTimer);
                step = this.index;
                setBanner();
                for (var j = 0; j < oDiv.length; j++) {
                    oDiv[j].style.display = "none";
                }
                oDiv[this.index].style.display = "block";
            };
            curLi.onmouseout = function () {
                autoTimer = setInterval(autoMove, times);
            }
        }
    }
}

//点击效果轮播














