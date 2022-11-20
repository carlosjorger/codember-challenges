function decrypt(code) {
    var currentLetter=0
    var result=""
    while (currentLetter<code.length) {
        if(code.slice(currentLetter,currentLetter+1)==' '){
            result+=' '
            currentLetter++;
            continue
        }
        var tempAncii=code.slice(currentLetter,currentLetter+2)
        if (parseInt(tempAncii)>=97 &&parseInt(tempAncii)<=122) {
            result+= String.fromCharCode(parseInt(tempAncii))
        }
        else {
            tempAncii=code.slice(currentLetter,currentLetter+3)
            result+= String.fromCharCode(parseInt(tempAncii))
        }
        currentLetter+=tempAncii.length
    }
    return result
}

console.log(decrypt('11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'))
module.exports = decrypt;
