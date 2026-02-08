'use strict';


function MakeMultiFilter(originalArray) {
    var currentArray = originalArray;

    for (var i = 0; i < currentArray.length; i++) {
        arrayFilterer(filterCritera(currentArray[i]), callback(currentArray));
    }

function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria === 'function') {
            for (var i = 0; i < currentArray.length; i++) {
                if (!filterCriteria(currentArray[i])) {
                    currentArray.splice(i, 1);
                    i--; 
                }
            }

        } else {
            return currentArray;
        }

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}


