setInterval(function() {
    console.log('\tping');
}, 1000);

setTimeout(function() {
    console.log('hello');
    setTimeout(function() {
        console.log('world');
    }, 2000);
}, 2000);
while(1); 
