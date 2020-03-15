function move_cinema(){
        var left=0;
        var move=setInterval(function(){
            document.getElementById("cinema").style.left=left+"px";
            left-=1;
            if(left==-6000) left=0;
        },1);
}