const utils = {}

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

if(typeof module !== 'undefined')
    module.exports = utils;
