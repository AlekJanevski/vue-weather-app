import axios from "axios";

// Declate the env variables
const apiKey = process.env.VUE_APP_API_KEY;
const apiUrl = process.env.VUE_APP_API_URL;

// Create the axios instance
const apiClient = axios.create({
  baseURL: `${apiUrl}`,
  withCredentials: false, // CORS
  // Extra source of information
  headers: {
    // What is acceptable by the client
    Accept: "application/json",
    // Tells the client what media type a response is sent it
    "Content-Type": "application/json"
  }
});

export default {
  /**
   * Handles the fetching of the data based on the city name and country code query
   * @param {*} cityName 
   * @param {*} countryCode 
   * @returns data response
   */
  getWeather(cityName, countryCode) {
    return apiClient.get(`weather?q=${cityName},${countryCode}&units=metric&appid=${apiKey}`);
  }
};