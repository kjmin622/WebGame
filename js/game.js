window.onload=function(){
    var play=true;
    function move_cinema(){
        var left=0;
        var move=setInterval(function(){
            if(play){
                document.getElementById("cinema").style.left=left+"px";
                left-=1;
                if(left==-4800) left=0;
            }
        },1);
    }
    move_cinema();


    var height = 0;
    char_struct();
    function char_struct(){
        document.getElementById("face").style.top=(300-height)+"px";
        document.getElementById("lace").style.top=(300-height)+"px";
        document.getElementById("leg").style.top=(300-height)+"px";
        
    }

    var lace = 1;
    var lace_check = true;
    var leg = 1;
    setInterval( // char animation
        function(){
            if(play){
                if(lace_check)lace+=1;
                else lace-=1;
                leg+=1;
                if(lace<1){lace=1; lace_check=true;}
                if(lace>2){lace=2; lace_check=false;}
                if(leg>2) leg=1;
                document.getElementById("leg").setAttribute('src','src/image/char/'+leg+'_leg.png');
                document.getElementById("lace").setAttribute('src','src/image/char/'+lace+'_lace.png');
            }
        }, 120);
    
    var jump=0;
    document.getElementById('screen').onclick = function(){
        if(jump==0){
            document.getElementById("jump1").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("jump1").style.visibility="hidden";
            },100);
        }
        if(jump==1){
            document.getElementById("jump2").style.top=300-height+"px";
            document.getElementById("jump2").style.visibility="visible";
            setTimeout(function(){
                document.getElementById("jump2").style.visibility="hidden";
            },100);
        }
        if(jump!=2){
            jump+=1;
            var up_speed=jump==1 ? 23:17;
            var up = setInterval(
                function(){
                    height+=up_speed;
                    up_speed-=1;
                    char_struct();
                },20
            );
            setTimeout(function() {
                clearTimeout(up);
                down_jump();
            },200);
        }
    }

    function down_jump(){
        var down_speed=-4;
        var down = setInterval(
            function(){
                if(down_speed>0) height-=down_speed;
                down_speed+=1;
                if(height<0) height=0;
                char_struct();
                if(height==0){
                    clearTimeout(down);
                    jump=0;
                }
            },25
        )
    }
}