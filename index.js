// Code your solution here
function findMatching(driverArray, string){

    return driverArray.filter(o => o.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driverArray, string){
    return driverArray.filter(o => o.slice(0,string.length) === string);
}

function matchName(driverArray, string){
    return driverArray.filter(o => o.name === string);
}