let Timer = 0;

setInterval(function() {
    Timer += 1;
    console.log(Timer);
    
    if(Timer == 120){
        window.location.assign('../anuncios/');
    }
}, 1000)