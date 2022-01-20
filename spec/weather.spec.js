import { assertEquals, printReport } from "./test-framework.js";

import { Weather } from '../src/weather.js';

export const canGenerateRandomWeatherCode = () => {
    const testDescription = "Can generate weather code between 0 and 1"

    // 1. Setup
    const expected = true;

    // 2. Execute
    const actualOutput = Weather.weatherGenerator();

    // 3. Verify
    const result = assertEquals(expected, actualOutput >= 0 && actualOutput < 1);

    // Report
    printReport(testDescription, result);
}


export const canReadWeatherCode = () => {
    const testDescription = "Can read a weather code"

    // 1. Setup
    const weatherCode = 0.5;
    const expectedOutput = "sunny";

    // 2. Execute
    const actualOutput = Weather.weatherCodeReader(weatherCode);

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}