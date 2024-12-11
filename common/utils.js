const utils = {}

utils.flaggedUsers = [1663882102141, 1663900040545, 1664485938220];

utils.formatProcent = (n) => {
    return (n*100).toFixed(2) + "%";
}

utils.printProgress=(count,max) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const procent = utils.formatProcent(
        count/max
    );

    process.stdout.write(
        count + "/" + max + " (" + procent + ")"
    );
}

utils.groupBy=(objArray, key) => {
    const groups={};
    for (let obj of objArray) {
        const val = obj[key];
        if (groups[val] == null)
            groups[val] = [];
        groups[val].push(obj);
    }
    return groups;
};

if(typeof module !== 'undefined')
    module.exports = utils;
