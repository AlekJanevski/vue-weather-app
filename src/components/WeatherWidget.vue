<template>
  <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
    <!-- Form and card wrapper -->
    <div class="row d-flex justify-content-center px-3 flex-column align-items-center">
      <!-- Weather card -->
      <div class="card col-sm-10">
          <h2 class="ml-auto mr-4 mt-3 mb-0 text-white">
            <!-- {{ weatherData.name }} -->
            {{ this.cityName }}
          </h2>
          <p class="ml-auto mr-4 mb-0 med-font text-white">
            <!-- {{ weatherData.weather[0].description }} -->
            {{ weatherDescription }}
          </p>
          <span class="ml-auto mr-4 large-font text-white">
            <!-- {{ Math.round(weatherData.main.temp) }}&#176; -->
            {{ Math.round(weatherTemp) }}&#176;
          </span>
          <img :src="require(`../assets/icons/${weatherIcon}.svg`)" alt="weather-icon" class="weather-icon">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WeatherView",

    props: {
      cityName: String,
      weatherDescription: String,
      weatherTemp: Number,
      weatherIcon: String
    }
  }
</script>

<style scoped>
.card {
  width: 400px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px #cccccc;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #00b4db, #0083b0);
  border: 0;
}

.weather-icon {
  width: 150px;
  height: 150px;
}
</style>
