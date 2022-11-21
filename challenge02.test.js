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

test('testing a code', () => {
    expect(decrypt('11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'))
    .toStrictEqual('thanks for playing codember please share');
});

