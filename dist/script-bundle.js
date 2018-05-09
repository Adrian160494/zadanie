"use strict";

var searchNumber = function searchNumber(items) {
    console.log(items);
    var regExp = /(\-|)[0-9]{1,}/;
    var numberArray = [];
    var count = 1;

    //Searching the numbers in array of items

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            var number = i.name.match(regExp);
            numberArray.push(number[0]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log(numberArray);
    //Sorting the new array with numbers from the smallest number to the largest
    while (count != 0) {
        count = 0;
        for (var k = 1; k < numberArray.length; k++) {
            var actual = parseFloat(numberArray[k]);
            var previous = parseFloat(numberArray[k - 1]);
            if (previous > actual) {
                numberArray[k - 1] = actual;
                numberArray[k] = previous;
                count++;
            }
        }
    }
    var lengthOfNumberArray = numberArray.length;

    console.log(numberArray[lengthOfNumberArray - 1]);
    return parseFloat(numberArray[lengthOfNumberArray - 1]);
};
'use strict';

var items = [{ name: 'item 2' }, { name: 'item 33 per page' }, { name: 'item -6' }, { name: 'cos -23 i cos' }, { name: 'error 102' }, { name: 'simple item -323 ' }, { name: '-1 let' }];
