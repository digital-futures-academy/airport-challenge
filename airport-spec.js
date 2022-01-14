Airport = require('./src/airport');
const { assertEquals } = require('./testFramework');

var counter = 0;

const canAddToAirport = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,1)
    // Arrange
    const expected = 1                  //Expect the number of planes on runway to be 1
    // Act
    airport.landing('Plane A')
    actual = airport.grounded.length                   //Attempts to land a plane at the airport
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test landing plane at airport`]
}

const canOverideCapacity = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(1,1)            //Sets capacity to 1
    // Arrange
    const expected = 2                  //Expect the number of planes on runway to be 1
    // Act
    airport.overrideCapacity(1)     //Attempt to increase the capacity
    actual = airport.capacity               //Checks capacity
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test increasing capacity`]
}

const testFullWarning = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(1,1, ['Plane B'])  
    // Arrange
    const expected = `Cannot land Plane A. We are at capacity`                 
    // Act
    actual = airport.landing('Plane A')        
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test at capacity`]
}

const testTakeOff = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,1)  
    // Arrange
    const expected = 0                 
    // Act
    airport.landing('Plane A');                    //Plane needs to be at the airport
    airport.takeOff('Plane A');       
    actual = airport.grounded.length 
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test plane has left aiport`]
}

const testTakeOffMessage = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,1)  
    // Arrange
    const expected = `Plane A has taken off`                 
    // Act
    airport.landing('Plane A');                    //Plane needs to be at the airport
    actual = airport.takeOff('Plane A');        
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test takeoff message`]
}

const testDuplicateLandingMessage = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,1)  
    // Arrange
    const expected = `Plane A has already landed`                 
    // Act
    airport.landing('Plane A');                    //Plane needs to be at the airport
    actual = airport.landing('Plane A');        
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test Duplicate landing message`]
}

const testDuplicateLandingCounter = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,1)  
    // Arrange
    const expected = 1                 
    // Act
    airport.landing('Plane A');                    //Plane needs to be at the airport
    airport.landing('Plane A');        
    actual = airport.grounded.length
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test Duplicate plane has not landed`]
}

const testTakeOffNullMessage = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,1)  
    // Arrange
    const expected = `Plane A is not at the airport and cannot takeoff`                 
    // Act                  
    actual = airport.takeOff('Plane A');        
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test non existant plane cannot take off`]
}

const testWeather = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,7)  
    // Arrange
    const expected = 7               
    // Act              
    actual = airport.weather;    
    // Assert
    const result = assertEquals(actual, expected);    
    // Report
    return [result, `${counter}). Test whether, weather comes up 1 or 0 (good vs bad weather)`]
}

const testWeatherTakeOff = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10, -1, ['Plane A'])  
    // Arrange
    const expected = `Plane A cannot start takeoff due to adverse weather`                
    // Act              
    actual = airport.takeOff('Plane A');    
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test takeoff when weather set to bad`]
}

const testWeatherTakeOffCount = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10, -1, ['Plane A'])  
    // Arrange
    const expected = 1                
    // Act              
    airport.takeOff('Plane A')
    actual = airport.grounded;    
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test grounded counter with takeoff when weather set to bad`]
}

const testWeatherLanding = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(10,-1);
    // Arrange
    const expected = `Plane A cannot land due to adverse weather`                 
    // Act                  
    actual = airport.landing('Plane A');        
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test plane landing in stormy weather`]
}

const testWeatherLandingCount = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(1, -1, ['Plane B'])  
    // Arrange
    const expected = 1                
    // Act              
    airport.landing('Plane A')
    actual = airport.grounded.length;  
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test grounded counter with landing when weather set to bad`]
}

const testOnRunway = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(1, 1)  
    // Arrange
    const expected = ['Plane A', 'Plane B', 'Plane C', 'Plane D']                
    // Act              
    airport.landing('Plane A')
    airport.landing('Plane B')
    airport.landing('Plane Z')
    airport.landing('Plane C')
    airport.landing('Plane D')
    airport.takeOff('Plane Z')

    actual = airport.grounded;  
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test whether grounded planes are recorded`]
}

module.exports = {canAddToAirport,
    canOverideCapacity,
    testFullWarning,
    testTakeOff,
    testTakeOffMessage,
    testDuplicateLandingMessage,
    testDuplicateLandingCounter,
    testTakeOffNullMessage,
    testWeather,
    testWeatherTakeOff,
    testWeatherTakeOffCount,
    testWeatherLanding,
    testWeatherLandingCount,
    testOnRunway}