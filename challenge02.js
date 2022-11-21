function decrypt(code) {
    var currentLetter = 0
    var result = ""
    while (currentLetter < code.length) {
        var lengthOfAncii = 1;
        var anciiString = ''
        for (lengthOfAncii = 1; lengthOfAncii <= 3; lengthOfAncii++) {
            var anciiString = code
                .slice(currentLetter, currentLetter + lengthOfAncii)
                .replace(' ', '32')
            if (anciiString == 32
                || anciiString >= 97 
                && anciiString <= 122) {
                break;
            }
        }
        result += String.fromCharCode(anciiString)
        currentLetter += lengthOfAncii
    }
    return result
}

// console.log(decrypt('11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'))
module.exports = decrypt;
