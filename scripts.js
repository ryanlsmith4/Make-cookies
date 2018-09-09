// scripts.js

/****************

COOKIE clicker

*****************/
//declare default variables
let cookieCount = 500;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;


//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');
cookieCounter.innerHTML = cookieCount;

cookieClicker.addEventListener("click", function() {
            cookieCount = cookieCount + clickPower;
            // update cookieCounter
            refreshCookieCount()
        })

// Buy click Power
buyClickPower.addEventListener('click', function () {
    if (cookieCount >= clickPowerPriceAmount) {
        console.log("item succesfully Bought");
        // subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        // update cookieCounter
        refreshCookieCount()
        // Upgrade power Level
        clickPowerLevelNumber += 1;
        // Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        // Update click power
        clickPower += 1;
        // refresh shop  items
        refreshPowerClick()
    } else {
        console.log("you don't have enough cookies!");
    }

})



    //function to interact with the default innerHTML
let refreshCookieCount = function () {
    cookieCounter.innerHTML = cookieCount;
}

// function to update click power level
let refreshPowerClick = function () {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}

/****************

        GRANDMAS

******************/

// set default values
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-mulitple');

buyGrandma.addEventListener("click", function() {
// make sure we have enough cookies and subtract cookies from price
if (cookieCount >= grandmaPriceAmount) {
    // subtract cookies from the price of the item
    cookieCount -= grandmaPriceAmount;
    refreshCookieCount()
//upgrade power Level
grandmaLevelNumber += 1;
//update grandmaPrice
grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
//update grandma Power
grandmaPower += 10;
//turn autoGrandma on!
autoGrandma = true;
autoGrandmaStart();
//refresh shop  item
refreshGrandma();
}
    })

// Game loop
let autoGrandmaStart = function () {
    let grandmaInt = window.setInterval(function(){
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000);
}

// refresh grandma fucntion
let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower;
}
