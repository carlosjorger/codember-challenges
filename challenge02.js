function decrypt(code) {
    var currentLetter=0
    var result=""
    while (currentLetter<code.length) {
        var lengthOfAncii=1;
        function getAncii(length=lengthOfAncii) {
            var result=code.slice(currentLetter,currentLetter+length)
            return result==' '?'32':result;
        }
        if(getAncii(lengthOfAncii)==32){
            console.log(lengthOfAncii)
        }
        else if(getAncii(2)>=97 &&getAncii(2)<=122){
            lengthOfAncii=2
        }
        else{
            lengthOfAncii=3
        }
        result+= String.fromCharCode(getAncii())
        currentLetter+=lengthOfAncii
    }
    return result
}

console.log(decrypt('11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'))
module.exports = decrypt;
