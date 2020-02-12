window.onload = function() {
    let btnBounce = document.getElementById('call-bounce-btn');
    let bouncer = document.getElementById('make-me-bounce');
    bouncer.addEventListener('animationend', function(){
        bouncer.classList.remove('animate');
    });
    btnBounce.addEventListener('click', function(){   
        bouncer.classList.add('animate');
    });
};