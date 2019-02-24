var myAge = 18;
var earlyYears = 2;
// first 2 human years are each equal to 25 cat years
earlyYears *= 25;

var laterYears = myAge - 2;
// each subsequent human year is equal to 4 cat years
laterYears *= 4;
var myAgeInCatYears = earlyYears + laterYears;
var myName = 'stefan';
console.log('My name is ' + myAge + '. I am '
            + myAge + ' years old which is '
            + myAgeInCatYears + ' years old in cat age');