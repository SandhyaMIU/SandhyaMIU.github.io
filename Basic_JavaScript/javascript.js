// No-2
function max(a, b) {
    if (a > b) return a;
    return b;
};

// No-3
function maxOfThree(a, b, c ) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    return c;
}

// No-4
function isVowel(a) {
    let isVowel = false;
    const vowelArr = ["a", "p", "p", "l", "e"];
    vowelArr.forEach(element => {
        if (a.toLowerCase() === element) {
            isVowel = true;
            return isVowel;
        }

    });
    return isVowel;
}

// No-5
function sum(a) {
    let sum = 0;
    a.forEach(e => {
        sum += e;
    });
    return sum;
}

function multiply(a) {
    let mul = 1;
    a.forEach(e => {
        mul *= e;
    });
    return mul;
}

// No-6
function reverse(a) {
    let length = a.length;
    let reverseString = "";

    for (let index = length - 1; index >= 0; index--) {
        reverseString += a[index];
    };
    return reverseString;
}

// No-7
function findLongestWord(a) {
    let longer = 0;
    a.forEach(e => {
        if (longer < e.length) {
            longer = e.length;
        }
    });
    return longer;
}

// No-8
function filterLongWords(a, i) {
    let longWordArr = [];
    a.forEach(e => {
        if (e.length > i) {
            longWordArr.push(e);
        }
    })
    return longWordArr;
}

// No-9
function jsFiddleA(a) {
    const b = a.map(function (e, i, array) {
        return e * 10;
    });
    return b;
};

function jsFiddleB(a) {
    const b = a.filter(function (e, i, array) {
        return e == 3;
    });
    return b;
};

function jsFiddleC(a) {
    const b = a.reduce(function (previousData, e, i, array) {
        return previousData * e;
    });
    return b;
};