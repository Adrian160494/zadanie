"use strict";

var getItemsMaxNumber = function getItemsMaxNumber(items) {
    console.log(items);
    var regExp = /^(\-|)[0-9]{1,}(\.[0-9]{1,}|)$/;
    var numberArray = [];
    var count = 1;
    var largestNumber = null;

    //Searching the numbers in array of items

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            var number = i.name.split(" ");
            console.log(number);
            if (number) {
                for (var k = 0; k < number.length; k++) {
                    var foundNumber = number[k].match(regExp);
                    if (foundNumber) {
                        console.log("Number: " + foundNumber[0]);
                        numberArray.push(foundNumber[0]);
                    }
                }
            }
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

    //Searching the largest number

    if (numberArray.length > 0) {
        largestNumber = numberArray[0];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = numberArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var num = _step2.value;

                if (parseFloat(num) > parseFloat(largestNumber)) {
                    largestNumber = num;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        console.log("Largest number: " + largestNumber);
        return parseFloat(largestNumber);
    } else {
        return 0;
    }
};
'use strict';

var items = [{ name: 'item -23' }, { name: 'item  6 ' }, { name: 'item32' }, { name: 'item 46 ' }, { name: 'error 14' }, { name: 'simple 23.234' }, { name: 'item 124.23' }, { name: 'item -534.32' }, { name: 'item 3e4' }];
'use strict';

function onLoad() {
    console.log('dzialam');
    var html = '<table class="table table-bordered"><thead><tr><td colspan="3">ITEMS</td></tr><tr><td>Id</td><td>Name</td></tr></thead><tbody>';
    for (var i = 0; i < items.length; i++) {
        html += '<tr><td>' + (i + 1) + '</td><td>' + items[i].name + '</td></tr>';
    }
    html += '</tbody></table>';

    document.getElementsByClassName('tableDiv')[0].innerHTML = html;
}

function searchNumber() {
    document.getElementsByClassName('resultView')[0].children[0].innerHTML = '<h1>The Largest: ' + getItemsMaxNumber(items) + '</h1>';
}

window.onload = onLoad();
