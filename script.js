var nav = document.querySelectorAll('#navbar ul li a');
for(var i=0;i<nav.length;i++){
    nav[i].addEventListener('click',function(ev){
        ev.preventDefault();

        var targetId = this.textContent.trim().toLowerCase();
        var targetSec = document.getElementById(targetId);
        var i_pos=window.pageYOffset;
        var f_pos = targetSec.offsetTop;
        var prev=-100;
        var interval = setInterval(function(){
            if(i_pos >= f_pos|| i_pos==prev){
                clearInterval();
                return;
            }
            window.scrollBy(0,5);
            prev=i_pos;
            i_pos = window.pageYOffset;
        },2);
    });
}
