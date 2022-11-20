const verify_usersString = require('./challenge01');

test('testing a valid user', () => {
    expect(verify_usersString(`
  usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82
  `)).toStrictEqual('1@midudev');
});

test('testing two valid user', () => {
    expect(verify_usersString(`
    usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember
psw:123456 age:21 loc:World

    `)).toStrictEqual('2@codember');
});

test('testing a valid user and invalid user', () => {
    expect(verify_usersString(`
    usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82

flle:111 eme:yrfa@gmail.com usr:@codember
psw:123456 age:21 loc:World

    `)).toStrictEqual('1@midudev');
});

test('testing a valid user and invalid user', () => {
    expect(verify_usersString(`
    usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82

eme:yrfa@gmail.com usr:@codember
psw:123456 age:21 loc:World

    `)).toStrictEqual('1@midudev');
});

test('testing a valid user and invalid user', () => {
    expect(verify_usersString(`
    usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82 country:Cuba

eme:yrfa@gmail.com usr:@codember
psw:123456 age:21 loc:World

    `)).toStrictEqual('1@midudev');
});