function processAruguments(...args){
    if(args.length === 0){
        console.log("no arguments");
        
    }else if(args.length === 1) {
        console.log("one argument" , args[0]);
        
    }else {
        console.log("multiple arguments ", args);
        
    }
}

processAruguments();
processAruguments(5)
processAruguments('apple','donkey', 'Gdds');