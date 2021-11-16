// 4 function calculator that chains operations
var displayDiv = document.querySelector("#display");
var numStr = "";
var numStr2 = "";
var equationArr = [];

function press(num) {
    if (numStr.includes(".") && num === ".") {
        return;
    }
    if (numStr.length <= 11) {
        numStr += num;
        numStr2 = String(num);
        displayDiv.innerHTML = numStr;
    }
    if (equationArr.length === 0) {
        equationArr[0] = numStr2;
    } else {
        equationArr[equationArr.length - 1] += numStr2;
    }
    // console.log(equationArr);
}

function setOP(operation) {
    equationArr.push(operation);
    if (equationArr[equationArr.length - 2] == '' && equationArr.length - 2 !== 0) {
        // console.log(equationArr.length)
        equationArr.splice(equationArr.length - 2, 2);
        // console.log(equationArr)
    }
    if (equationArr[0].includes("+") || equationArr[0].includes("-") || equationArr[0].includes("*") || equationArr[0].includes("/")) {
        equationArr = [];
    } else {
        numStr = "";
        numStr2 = "";
        equationArr.push("")
    }
}
// Function allows more than one operation
function calculate() {
    if (equationArr.length > 0) {
        var indxOfDiv = equationArr.indexOf("/");
        var indxOfMult = equationArr.indexOf("*");
        var indxOfAdd = equationArr.indexOf("+");
        var indxOfSub = equationArr.indexOf("-");
        while (indxOfMult != -1) {
            var indxOfMult = equationArr.indexOf("*");
            var multResult = equationArr[indxOfMult - 1] * equationArr[indxOfMult + 1];
            console.log(multResult);
            equationArr.splice(indxOfMult - 1, 3, multResult);
            indxOfMult = equationArr.indexOf("*");
        }
        while (indxOfDiv != -1) {
            var indxOfDiv = equationArr.indexOf("/");
            var divResult = equationArr[indxOfDiv - 1] / equationArr[indxOfDiv + 1];
            equationArr.splice(indxOfDiv - 1, 3, divResult);
            indxOfDiv = equationArr.indexOf("/");
        }
        while (indxOfAdd != -1) {
            var indxOfAdd = equationArr.indexOf("+");
            var addResult = Number(equationArr[indxOfAdd - 1]) + Number(equationArr[indxOfAdd + 1]);
            equationArr.splice(indxOfAdd - 1, 3, addResult);
            indxOfAdd = equationArr.indexOf('+');
        }
        while (indxOfSub != -1) {
            var indxOfSub = equationArr.indexOf("-");
            var subResult = equationArr[indxOfSub - 1] - equationArr[indxOfSub + 1];
            equationArr.splice(indxOfSub - 1, 3, subResult);
            indxOfSub = equationArr.indexOf('-');
        }
        // console.log(equationArr);
        equationArr[0] = String(equationArr[0])
        displayDiv.innerHTML = equationArr[0].slice(0, 12);
        equationArr = [];
        numStr = "";
    }
}

function clr() {
    displayDiv.innerHTML = 0;
    equationArr = [];
    numStr = "";
}

