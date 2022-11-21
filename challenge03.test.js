const zebraLights = require('./challenge03');

test('testing a zebraLight', () => {
    expect(zebraLights(['red', 'blue', 'red', 'blue', 'green']))
        .toStrictEqual('4@blue');
});

test('testing a zebraLight', () => {
    expect(zebraLights(['green', 'red', 'blue', 'gray']))
        .toStrictEqual('2@gray');
});

test('testing a zebraLight', () => {
    expect(zebraLights(['blue', 'blue', 'blue', 'blue']))
        .toStrictEqual('1@blue');
});

test('testing a zebraLight', () => {
    expect(zebraLights(['red', 'green', 'red', 'green', 'red', 'green']))
        .toStrictEqual('6@green');
});

test('testing a zebraLight', () => {
    expect(zebraLights(['blue', 'red', 'blue', 'red', 'gray']))
        .toStrictEqual('4@red');
});

test('testing a zebraLight', () => {
    expect(zebraLights(['red', 'red', 'blue', 'red', 'red', 'red', 'green']))
        .toStrictEqual('3@red');
});

test('testing a zebraLight', () => {
    expect(zebraLights(['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green']))
        .toStrictEqual('6@green');
});