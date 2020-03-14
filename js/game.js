window.onload=function(){
    document.documentElement.addEventListener('touchstart', function (event){
        if(event.touches.length>1){
            event.preventDefault();
        }
    }, false); // 모바일 더블터치 확대 방지

    var height = 0;
    function char_struct(){
        // face 300px
        document.getElementById("face").style.top=(300-height)+"px";
        document.getElementById("lace").style.top=(300-height)+"px";
        document.getElementById("leg").style.top=(300-height)+"px";
        
    }
    char_struct();
}