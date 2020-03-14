window.onload=function(){
    var play=true;
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
                if(lace>3){lace=2; lace_check=false;}
                if(leg>2) leg=1;
                document.getElementById("leg").setAttribute('src','src/image/char/'+leg+'_leg.png');
                document.getElementById("lace").setAttribute('src','src/image/char/'+lace+'_lace.png');
            }
        }, 120);
}