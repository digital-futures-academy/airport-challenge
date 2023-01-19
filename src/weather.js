function checkWeather() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  if (randomNum <= 70) {
    return "sunny";
  } else {
    return "stormy";
  }
}

module.exports = { checkWeather };
