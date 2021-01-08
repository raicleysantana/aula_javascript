var test = "example";

(() => {
    console.log(test);

    if(true){
        var test = "example1";
        console.log(test);
    }

    console.log(test);
})();