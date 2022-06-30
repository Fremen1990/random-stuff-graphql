const Quotes = require("inspirational-quotes");

function rootValue() {
  //Random Dice Throw 1-6
  const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);

  // Today day
  const today = new Date();

  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Random Coin Toss true/false
  const randomCoinToss = () => Math.random() > 0.5;
  const getRandomCoinTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCoinToss());
    } while (!result[result.length - 1]);
    return result;
  };

  return {
    greeting: "Hello Man!", //number will be automatically converted to String (JS thing :D )
    schroedingersCatGreeting: randomCoinToss() ? "Meaow!" : null,
    interestingUrls: [
      "https://devthomas.pl",
      "https://www.devthomas.pl/tomasz-stanisz-web-developer-cv/",
    ],
    favouriteNumber: 69,
    randomDiceThrow: getRandomDiceThrow(6),
    integerArray: [3, 4, 6, 3, 2323],
    pi: Math.PI,
    isTodayFriday: today.getDay() === 5,
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomQuote: Quotes.getQuote(),
  };
}

module.exports = rootValue;
