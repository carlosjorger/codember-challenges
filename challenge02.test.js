const decrypt = require('./challenge02');

test('testing a code', () => {
    expect(decrypt('109105100117')).toStrictEqual('midu');
});

test('testing a code', () => {
    expect(decrypt('9911110010110998101114'))
    .toStrictEqual('codember');
});

test('testing a code', () => {
    expect(decrypt('11210897121 116101116114105115'))
    .toStrictEqual('play tetris');
});

