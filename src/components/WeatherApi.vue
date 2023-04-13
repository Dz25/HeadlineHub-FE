<script>
import axios from "axios";

export default {
  data() {
    return {
      apiKey: "1943725d907ddb4c42da06fe1f30202a",
      cityName: "",
      temperature: 0,
      condition: "",
      date: "",
      imgUrl: "",
    };
  },
  methods: {
    async getWeather() {
      let url;
      if (this.city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
            this.fetchWeatherData(url);
          },
          (error) => {
            console.log(error);
          }
        );
      }
      this.fetchWeatherData(url);
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);

        const data = await response.data;
        this.imgUrl = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        this.temperature = data.main.temp;
        this.condition = data.weather[0].description;
        this.date = new Date().toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        this.cityName = data.name;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getWeather();
  },
};
</script>

<template>
  <div class="container m-1">
    <div class="d-flex mt-2">
      <div class="flex-fill">
        <img :src="imgUrl" class="img-fluid" />
      </div>
      <div class="flex-fill flex-column">
        <p class="text-center mb-0">{{ cityName }}</p>
        <p class="h5 text-center mt-1">{{ Math.round(temperature) }} &deg;C</p>
        <p class="mb-0">{{ date }}</p>
      </div>
    </div>
  </div>
</template>
