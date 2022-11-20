function verify_users() {
    var fs = require('fs');
    fs.readFile('./files/challenge01/users.txt', { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            console.log(verify_usersString(data))
        } else {
            console.log(err);
        }
    });
}
function verify_usersString(usersString) {
    user_propeties = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
    const users = usersString.split(/\n\n/).filter(user => user !== '')
    var validUsers = 0;
    var lastValidUser = ''
    // while (current < properties.length) {
    //     user = properties.slice(current, current + user_propeties.length)
    //         .map(property => property.split(':')[0])
    //         .sort()
    //     if (user.toString() === user_propeties.toString()) {
    //         validUsers++
    //         lastValidUser=properties.slice(current, current + user_propeties.length)
    //         .find(property=>property.startsWith('usr:')).split(':')[1]
    //     }
    //     current += user_propeties.length;
    // }
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        var properties = user.split(/\s/).map(property => property.trim()).filter(property => property != '');
        var values = properties
            .map(property => property.split(':')[0])
        var isvalid = user_propeties
            .every(property => values.includes(property))
        if (isvalid && properties.length >= user_propeties.length) {
            validUsers += 1
            lastValidUser = properties
                .find(property => property.startsWith('usr:'))
                .split(':')[1]
        }



    }
    // users.forEach(user => {
    //     var properties = user.split(' ');
    //     var isvalid = properties
    //         .map(property => property.split(':')[0])
    //         .every(property => user_propeties.includes(property))
    //     if (isvalid) {
    //         validUsers += 1
    //     }

    //     lastValidUser = properties
    //         .find(property => property.startsWith('usr:'))
    //         .split(':')[1]
    // });
    return `${validUsers}${lastValidUser}`
}
verify_users()

module.exports = verify_usersString;

