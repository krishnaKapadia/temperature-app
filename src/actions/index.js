import axios from 'axios';

const API_KEY = "30baf555129bf0caa2c422f75fce52cc";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  //Create url given the city and make the api request through axios
  const url = `${API_URL}&q=${city},nz`;
  const request = axios.get(url);

  

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
