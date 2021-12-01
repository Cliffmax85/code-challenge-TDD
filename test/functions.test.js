// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a strign with three ! points', (expect) => {
    
    const actual1 = addExclamationPoints('puppy');

    const expected1 = 'puppy!!!';

    const actual3 = addExclamationPoints('horse');

    const expected3 = 'horse!!!';

    

    const expected2 = 'dog!!!';

    const actual2 = addExclamationPoints('dog'); 

    expect.equal(actual1, expected1, 'should return "puppy!!!"');
    expect.equal(actual2, expected2, 'should return "dog!!!"');
    expect.equal(actual3, expected3, 'should return "horse!!!"');
});

test('multpiplyBySeven should return a number multiplied by seven', (expect) => {

    const actual1 = multiplyBySeven(7);
    const expected1 = 49;

    const actual2 = multiplyBySeven(2);
    const expected2 = 14;

    const actual3 = multiplyBySeven(3);
    const expected3 = 21;

    expect.equal(actual1, expected1, 'should return 49');
    expect.equal(actual2, expected2, 'should return 14');  
    expect.equal(actual3, expected3, 'should return 21');
});

test('Multplyby12 should return a number multiplied by 12 and then halved', (expect) => {
    const actual1 = multiplyBy12ThenHalve(2);
    const expected1 = 12;

    const actual2 = multiplyBy12ThenHalve(3);
    const expected2 = 18;

    const actual3 = multiplyBy12ThenHalve(4);
    const expected3 = 24;

    expect.equal(actual1, expected1, 'should return 12');
    expect.equal(actual2, expected2, 'should return 18');
    expect.equal(actual3, expected3, 'should return 24');

});

test('divideThenMultiply should take in 3 numbers, divide the first by the second and then mutiply that number by the third input nu ber', (expect) => {
    const actual1 = divideThenMultiply(8, 4, 2);
    const expected1 = 4;

    const actual2 = divideThenMultiply(10, 5, 4);
    const expected2 = 8;

    const actual3 = divideThenMultiply(20, 10, 3);
    const expected3 = 6;

    expect.equal(actual1, expected1, 'should return 4');
    expect.equal(actual2, expected2, 'should return 8');
    expect.equal(actual3, expected3, 'should return 6');
});

test('returnAsAnArray should take in three numbers and return those number in an array', (expect) => {
    const actual1 = returnAsAnArray(8, 5, 4);
    const expected1 = [8, 5, 4];
    
    const actual2 = returnAsAnArray(3, 0, 8);
    const expected2 = [3, 0, 8];

    const actual3 = returnAsAnArray(72, 18, 35);
    const expected3 = [72, 18, 35];

    expect.deepEqual(actual1, expected1, 'should return [8, 4, 5]');
    expect.deepEqual(actual2, expected2, 'should return [3, 0, 8]');
    expect.deepEqual(actual3, expected3, 'should return [72, 18, 35]');
});

test('returnAsAString should take in three numbers and return them as a string', (expect) => {
    const actual1 = returnAsAString(8, 5, 4);
    const expected1 = '854';

    const actual2 = returnAsAString(7, 6, 5);
    const expected2 ='765';

    const actual3 = returnAsAString(9, 2, 0);
    const expected3 = '920';

    expect.equal(actual1, expected1, 'should return "854" as a string');
    expect.equal(actual2, expected2, 'should return "765"');
    expect.equal(actual3, expected3, 'should return "920"');
});

test('makeLuckyGreeting should take 2 numbers and combine them to make you lucky numbers', (expect) => {
    const actual1 = makeLuckyGreeting(13, 13)
    const expected1 = 26;

    const actual2 = makeLuckyGreeting(2, 3);
    const expected2 = 5;

    const actual3 = makeLuckyGreeting(8, 5);
    const expected3 = 13;

    expect.equal(actual1, expected1, 'Should return 26');
    expect.equal(actual2, expected2, 'should return "5"')
    expect.equal(actual1, expected1, 'should return "13"')

});

test('getSecondItem should return the second item in an array', (expect) =>{
    const actual1 = getSecondItem(['peach', 'lemon', 'kiwi', 'potato']);
    const expected1 = 'lemon';

    const actual2 = getSecondItem(['mario', 'Luigi']);
    const expected2 = 'Luigi';

    const actual3 = getSecondItem(['pickle', 'mustard', 'tomato', 'lettuce']);
    const expected3 = 'mustard';

    expect.deepEqual(actual1, expected1, 'should return "lemon"')
    expect.deepEqual(actual2, expected2, 'should return "Luigi"')
    expect.deepEqual(actual3, expected3, 'should return "mustard"')
});



skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

