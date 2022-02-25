<template>
  <div id="app" class="d-flex justify-content-center align-items-center flex-column py-5">
    <!-- Form inputs -->
    <div class="form-group col-sm-3 d-flex justify-content-center align-items-start flex-column">
      <label for="city" class="text-start d-block">City name</label>
      <input v-model="city" type="text" class="form-control" id="city" placeholder="Vienna" data-city>
      <label for="city" class="text-start d-block mt-3">Country code</label>
      <input v-model="country" type="text" class="form-control" id="country" placeholder="AT" maxlength="2" data-code>
      <button type="submit" class="btn btn-primary border-0 mt-3 submit-btn" @click="fetchWeather(city, country)">Submit</button>
    </div>
    <!-- Weather widget component -->
    <WeatherWidget 
      v-if="this.$store.state.dataIsReceived"
      :cityName="weatherData.name"
      :weatherDescription="weatherData.weather[0].description"
      :weatherTemp="weatherData.main.temp"
      :weatherIcon="weatherData.weather[0].main.toLowerCase()"
    />
    <!-- If the city cannot be found -->
    <div v-if="this.$store.state.errorMsg" class="alert alert-danger mt-4" role="alert">
      We're sorry, but the weather for this city cannot be found.
    </div>
  </div>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue'

export default {
  name: "App",

  components: {
    WeatherWidget
  },

  data() {
    return {
      city: "",
      country: ""
    }
  },

  created() {
    /**
     * Initial load of the weather
     * Sent params as @payload
     */
    this.$store.dispatch("updateWeather", {
      cityName: "Vienna",
      cityCode: "AT"
    }); 
  },

  computed: {
    /**
     * Fetch the state of the store
     */
    weatherData() {
      return this.$store.state.weatherData;
    },

    getIcon() {
      const text = this.weatherData.weather[0].main;
      return text.toLowerCase();
    }
  },

  methods: {
    /**
     * Handles the data fetch of the weather on submit button click
     * includes params as @payload 
     */
    fetchWeather(cityName, countryCode) {
      this.$store.dispatch("updateWeather", {
        cityName: cityName,
        cityCode: countryCode
      });    
    }
  }
}
</script>

<style>
body {
    color: #fff;
    overflow-x: hidden;
    height: 100%;
    background-color: #CFD8DC;
    background-repeat: no-repeat
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.submit-btn {
  background-image: linear-gradient(to right, #00b4db, #0083b0);
  font-weight: 500;
}
</style>
