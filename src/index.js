
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let minimal = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < minimal) {
            minimal = array[i];
        }
    }
    return minimal;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let maximal = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > maximal) {
            maximal = array[i];
        }
    }
    return maximal;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let avg = 0;

    for (i = 0; i < array.length; i++) {
        avg += array[i];
    }

    return avg/array.length;
}
