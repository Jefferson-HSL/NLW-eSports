let Timer = 0;

setInterval(function() {
    Timer += 1;
    console.log(Timer);
    
    if(Timer == 45){
        window.location.assign('../home/');
    }
}, 1000)