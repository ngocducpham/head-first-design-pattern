import { CurrentConditionsDisplay } from './Observer/CurrentConditionsDisplay';
import { ForecastDisplay } from './Observer/ForecastDisplay';
import { WeatherData } from './Subject/WeartherData';

let currentConditionsDisplay = new CurrentConditionsDisplay();
let forecastDisplay = new ForecastDisplay();
let weatherData = new WeatherData();

weatherData.subscribe(currentConditionsDisplay);
forecastDisplay.subscribe(weatherData);

weatherData.setMeasurements(32, 90, 1);
weatherData.setMeasurements(25, 95, 1);

currentConditionsDisplay.unsubscribe(weatherData);
weatherData.setMeasurements(21, 85, 1);
