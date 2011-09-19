function getFunction(i) {
    return function() {
        console.log(i);
    }
}

for (var i=0; i < 20; i++) {
    setTimeout(getFunction(i), 1000);
}
