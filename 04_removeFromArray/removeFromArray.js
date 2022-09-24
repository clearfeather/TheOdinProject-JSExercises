const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    // loop through array
    array.forEach((item) => {
        // if cut value exists
        if (!args.includes(item)) {
            // remove cut value
            newArray.push(item);
        }
    });
    // return array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
