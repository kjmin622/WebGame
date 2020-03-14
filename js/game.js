window.onload=function(){
    var height = 0;
    function char_struct(){
        // face 300px
        document.getElementById("face").style.top=(300-height)+"px";
        document.getElementById("lace").style.top=(300-height)+"px";
        document.getElementById("leg").style.top=(300-height)+"px";
        
    }
    char_struct();
}