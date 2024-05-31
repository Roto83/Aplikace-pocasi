<script>
  import Temperature from './Components/Temperature.svelte';
  import SearchBar from "./Components/SearchBar.svelte"
  import Statistics from './Components/Statistics.svelte';
  import Dashboard from './Components/Dashboard.svelte';
  import ForecastFetch from './forecastFetch';

  let searchedLon = 14.4212535;
  let searchedLat = 50.0874654;
  let weatherData;
  async function accessData() {
    weatherData = await ForecastFetch(searchedLat, searchedLon);
    console.log(weatherData);
  }
  accessData();

  function handleData(event) {
    searchedLon = event.detail.lon;
    searchedLat = event.detail.lat;
    accessData();
  }
</script>

<main>
  <section id="leftSection">
    <Dashboard />
  </section>
  <section id="centerSection">
    <div>
     <SearchBar on:sendData={handleData} />
     <Temperature {weatherData}/>
     <Statistics {weatherData} />
    </div>
  </section>
  <section id="rightSection">

  </section>
</main>

<style>
  #leftSection{
    width: 15%;
    height: 100px;
  }
  #centerSection{
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: center;
    border-left: 2px solid #E1E8EC;
  }
  #rightSection{
    background-color:cornflowerblue;
    width: 25%;
    height: 100px;
  }
  main{
    display: flex;
    flex-direction: row;
  }
</style>
