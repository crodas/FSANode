setTimeout(function() {
    console.log('hello');
    setTimeout(function() {
        console.log('world');
    }, 2000);
}, 2000);
