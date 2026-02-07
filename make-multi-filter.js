'make strict';

var originalArray = [1, 2, 3];

function MakeMultiFilter(originalArray) {
    var currentArray = originalArray;

    for (var i = 0; i < currentArray.length; i++) {
        arrayFilterer(filterCritera, callback);
    }

    function arrayFilterer(filterCritera, callback) {
        if (filterCriteria) {
            currentArray.splice()
        } else {

        }
    }
    return arrayFilterer();
}

function filterCritera(element) {
    if (element >= 1) {
        return true;
    } else {
        return false;
    }
}

/*
function callback() {

}
*/
