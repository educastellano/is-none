var test    = require('tape');
var isNone  = require('./index')

test('it should return true if passing null', function (t) {
    let x = null
    t.equals(isNone(x), true);
    t.end();
});


test('it should return true if passing undefined', function (t) {
    let x
    t.equals(isNone(x), true);
    t.end();
});

test('it should return false if passing anything else', function (t) {
    let x = 0
    let y = false
    let z = ''
    let a = []
    let o = {}
    t.equals(isNone(x), false);
    t.equals(isNone(y), false);
    t.equals(isNone(z), false);
    t.equals(isNone(a), false);
    t.equals(isNone(o), false);
    t.end();
});