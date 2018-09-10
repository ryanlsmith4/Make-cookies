// scripts.js

/****************

COOKIE clicker

*****************/
//declare default variables
let cookieCount = 0;
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
    grandmaMultiple.innerHTML = grandmaPower - 10;
}

/*****************

    Facilities

******************/
// set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-mulitple');
//Buy a facility
buyFacility.addEventListener("click", function () {
    console.log("we clicked it");
    //set autoloop to false
    facilityAuto = false;
    //make sure we have enough Cookies
if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount();

    //upgrade power Level
facilityLevelNumber += 1;
    //update price
facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility Power
facilityPower += 600;
    //turn autoFacility on!
facilityAuto = true;
autoFacilityStart();
    // refresh shop item
refreshFacility();
}
})
//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function () {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
}
//refresh shop
let refreshFacility = function (){
    facilityLevel.innerHTML = facilityLevelNumber;
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}
