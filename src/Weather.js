class Weather {
  isStormy() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // If the random number is greater than 8, it is stormy
    const isStormy = randomNumber > 8;
    
    // Print a statement indicating whether it is stormy or not
    if (isStormy) {
      console.log("Weather is stormy. Takeoff and landing are not allowed.");
    } else {
      console.log("Weather is not stormy. Takeoff and landing are allowed.");
    }

    // Return the stormy status
    return isStormy;
  }
}

module.exports = Weather;


// class Weather {
//     isStormy() {
//         return Math.random() > 0.5; // 50% chance of stormy weather
//     }
// }

// module.exports = Weather; 