export class Weather {
    static weatherGenerator = () => Math.random();
    // outputs 0 <= weather < 0.9 represent sunny weather
    // outputs 0.9 < weather < 1 represent stormy weather

    static weatherCodeReader = (weatherCode) => weatherCode < 0.9 ? "sunny" : "stormy";
}