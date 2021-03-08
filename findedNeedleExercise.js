
function findNeedle (haystack, needle) {
    var findedNeedle = "";
    var iterator = 0;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[iterator]) {
            findedNeedle = findedNeedle + haystack[i];

            if (findedNeedle === needle) {
                console.log((i+1)-findedNeedle.length)
                return; 
            }
            iterator = iterator + 1;
        }
    }
    console.log(-1)
    
}

findNeedle ("react-redux", "redux")
