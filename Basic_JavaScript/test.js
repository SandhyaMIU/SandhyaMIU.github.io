window.onload = testJavaScript;

function testJavaScript() {
    testMax(20, 10, 20);
    testMaxOfThree(5, 4, 44, 44);
    testMaxOfThree(55, 4, 44, 4);
    testMaxOfThree(55, 4, 44, 55);
    testIsVowel("A");
    testSum([1, 2, 3, 4, 5], 15);
    testSum([1, 2, 3, 4, 5], 10);
    testMultiply([1, 2, 3, 4], 24);
    testMultiply([1, 2, 3, 4], 20);
    testReverse("Web Application Programming", "gnimmargorP noitacilppA beW");
    testReverse("Web Application Programming", "ginmmargorP beW");
    testFindLongestWord(["Web", "Application"], 11);
    testfilterLongWords(["Web", "Application", "Programmingggg"], 5, ["Appplicationnnn", "weeeb"]);
    testjsFiddleA([1, 2, 3], [10, 20, 30]);
    testjsFiddleB([1, 2, 3], [3]);
    testjsFiddleC([1, 2, 3], 6);
}

function testMax(a, b, exceptResult) {
    let outPut = max(a, b);
    if (exceptResult === outPut) {
        console.log("Excepted output of max(" + a + "," + b + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of max(" + a + "," + b + ") is " + outPut + "  TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testMaxOfThree(a, b, c, exceptResult) {
    let outPut = maxOfThree(a, b, c);
    if (exceptResult === outPut) {
        console.log("Excepted output of max(" + a + "," + b + "," + c + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of max(" + a + "," + b + "," + c + ") is " + outPut + "  TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testIsVowel(a) {
    let outPut = isVowel(a);
    if (outPut)
        console.log("Excepted output of IsVowel(" + a + ") is " + outPut + "  TEST SUCCEDED");
    else console.log("Excepted output of IsVowel(" + a + ") is " + outPut + " TEST FAILED.");
}


function testSum(a, exceptResult) {
    let outPut = sum(a);
    if (outPut == exceptResult) {
        console.log("Excepted output of sum(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of sum(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testMultiply(a, exceptResult) {
    let outPut = multiply(a);
    if (outPut == exceptResult) {
        console.log("Excepted output of multiply(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of multiply(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testReverse(a, exceptResult) {
    let outPut = reverse(a);
    if (outPut == exceptResult) {
        console.log("Excepted output of reverse(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {    
        console.log("Excepted output of reverse(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testFindLongestWord(a, exceptResult) {
    let outPut = findLongestWord(a);
    if (outPut == exceptResult) {
        console.log("Excepted output of findLongestWord(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of findLongestWord(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testfilterLongWords(a, i, exceptResult) {
    let outPut = filterLongWords(a, i);
    let isEqual = true;
    for (let i = 0; i < outPut.length; i++) {
        if (outPut[i] !== exceptResult[i]) {
            isEqual = false;
            break;
        }
    }
    if (outPut.length == exceptResult.length && isEqual) {
        console.log("Excepted output of filterLongWords(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of filterLongWords(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testjsFiddleA(a, exceptResult) {
    let outPut = jsFiddleA(a);
    if (outPut.length == exceptResult.length && checkArrayEquals(outPut,exceptResult)) {
        console.log("Excepted output of jsFiddle8A(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of jsFiddle8A(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testjsFiddleB(a, exceptResult) {
    let outPut = jsFiddleB(a);
    if (outPut.length == exceptResult.length && checkArrayEquals(outPut,exceptResult)) {
        console.log("Excepted output of jsFiddle8b(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of jsFiddle8b(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testjsFiddleC(a, exceptResult) {
    let outPut = jsFiddleC(a);
    if (outPut == exceptResult ) {
        console.log("Excepted output of jsFiddle8c(" + a + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of jsFiddle8c(" + a + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function checkArrayEquals(a, b) {
    let isEqual = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i])
            isEqual = false;
        break;
    }
    return isEqual;
}