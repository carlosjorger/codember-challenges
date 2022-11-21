function zebraLights(lights) {
    var zebraArray = [...Array(lights.length)].map(_ => 0);
    // console.log(lights.length,[...Array(lights.length)],zebraArray)
    for (let i = 0; i < zebraArray.length; i++) {
        if (i >= 2 && lights[i] !== lights[i - 1]
            && lights[i] === lights[i - 2]) {
            zebraArray[i] = zebraArray[i - 1] + 1
        }
        else if (i >= 1 && lights[i] !== lights[i - 1]) {
            zebraArray[i] = 2
        }
        else {
            zebraArray[i] = 1
        }
    }
    last = zebraArray.reduce((previousIndex, currentValue, currentIndex, array) =>
        (array[previousIndex] <= currentValue) ? currentIndex : previousIndex)
    console.log(zebraArray)
    return `${zebraArray[last]}@${lights[last]}`
}
function submit() {
    var fs = require('fs');
    fs.readFile('./files/challenge01/colors.txt', { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            console.log(zebraLights([...JSON.parse(data)]))
        } else {
            console.log(err);
        }
    });
}
submit()
// zebraLights(['red', 'blue', 'red', 'blue', 'green'])
module.exports = zebraLights