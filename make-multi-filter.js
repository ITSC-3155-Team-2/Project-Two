'use strict';

const arrayFilterer1 = MakeMultiFilter([1, 2, 3]);

function MakeMultiFilter(originalArray) {
    var currentArray = originalArray;

    for (var i = 0; i < currentArray.length; i++) {
        arrayFilterer(filterCritera(currentArray[i]), callback(currentArray));
    }

    function arrayFilterer(filterCritera, callback) {
        if (filterCriteria) {
            currentArray.splice(i, 1);
        }

        return this;
    }
}

function filterCritera(element) {
    if (element >= 1) {
        return true;
    } else {
        return false;
    }
}

function callback(currentArray) {
    this.currentArray;
}


