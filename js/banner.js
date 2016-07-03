
new Banner("new1");
new Banner("new2");
new Banner("new3");
new Banner("new4");
new Banner("new5");

function Banner(id){
    var news=document.getElementById(id);
    news.onclick=function(e){
        e=e|| window.event;
        var tar= e.target|| e.srcElement;
        var tagTag=tar.tagName.toUpperCase();
        var child1=utils.children(news,"div")[0];
        var child2=utils.children(child1,"div")[0];
        var child3=utils.children(child2,"div");
        var w=child3[0].offsetWidth;
        if(tar.className == "buttonRight"){
            for(var i=0;i<child3.length;i++){
                if(i<child3.length-1){
                    zhufengAnimate(child2,{"left":-w*1},500)
                }
            }
            //utils.css."buttonRight".('background',)
        }
        if(tar.className == "buttonLeft"){
            for(var i=0;i<child3.length;i++){
                if(i<child3.length-1){
                    zhufengAnimate(child2,{"left":w*i},500);
                }
            }
        }
    }
}


















