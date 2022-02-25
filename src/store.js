import Vue from 'vue'
import Vuex from 'vuex'; 
import service from "@/services/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherData: {},
    dataIsReceived: false,
    errorMsg: ""
  },

  mutations: {
    UPDATE_WEATHER(state, payload) {
      // Use the service
      service
        // Call the function from the service and include the payload
        .getWeather(payload.cityName, payload.cityCode)
        // Fill the weatherData Object and change the boolean to true
        .then(response => {
          state.weatherData = response.data;
          state.dataIsReceived = true;
        })
        // If there is an error, log the error and change the boolean to false - TODO (include the error as a message for the user)
        .catch(error => {
          console.log("There was an error:", error);
          state.errorMsg = error;
          state.dataIsReceived = false;
        });
    }
  },
  
  actions: {
    /**
     * Handles the mutation of the state and fetching the data
     * @param {weatherData, dataIsReceived} context 
     * @param {cityName, cityCode} payload 
     */
    updateWeather(context, payload) {
      context.commit("UPDATE_WEATHER", {
        cityName: payload.cityName,
        cityCode: payload.cityCode
      });
    }
  }
});