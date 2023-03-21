<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        apiKey: '1943725d907ddb4c42da06fe1f30202a',
        cityName: '',
        temperature: 0,
        condition: '',
        date: '',
      };
    },
    methods: {
      async getWeather() {
        let url;
        if (this.city) {
          url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
        } else {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
            this.fetchWeatherData(url);
          }, (error) => {
            console.error(error);
          });
        }
        this.fetchWeatherData(url);
      },
      async fetchWeatherData(url) {
        try {
          const response = await axios.get(url);
          this.temperature = response.data.main.temp;
          this.condition = response.data.weather[0].description;
          this.date = new Date().toLocaleString('en-US', { month: 'long' , day: 'numeric', year: 'numeric' });
          this.cityName = response.data.name;
        } catch (error) {
          console.error(error);
        }
      },
    },
    mounted() {
      this.getWeather();
    },
  };
  </script>

<template>
    <div>
      <div>
       <p>  {{ date}}, {{ temperature }}&deg;C   {{ cityName }}</p>
      </div>
    </div>
  </template>