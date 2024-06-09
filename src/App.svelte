<script>
  import Temperature from './Components/Temperature.svelte';
  import SearchBar from "./Components/SearchBar.svelte"
  import Statistics from './Components/Statistics.svelte';
  import Dashboard from './Components/Dashboard.svelte';
  import Timeline from './Components/Timeline.svelte';
  import logo from "./assets/logo.png";
  import ForecastFetch from './forecastFetch';

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  let searchedLon = 14.4212535;
  let searchedLat = 50.0874654;
  let weatherData;
  async function accessData() {
    weatherData = await ForecastFetch(searchedLat, searchedLon);
  }
  accessData();

  function handleData(event) {
    searchedLon = event.detail.lon;
    searchedLat = event.detail.lat;
    accessData();
  }
</script>

<main class="flex flex-col md:flex-row">
  <section id="leftSection" class="md:w-1/6 hidden md:block">
    <Dashboard showLogo={true} />
  </section>

  <section id="centerSection" class="md:w-3/5 w-full">
    <div>
      <SearchBar on:sendData={handleData} />
      <Temperature {weatherData}/>
      <Statistics {weatherData} />
    </div>
  </section>

  <section id="rightSection" class="md:w-1/4 w-full">
    <Timeline {weatherData}/>
  </section>
</main>

<!-- Mobile Header -->
<div class="fixed top-0 left-0 w-full bg-white p-4 flex justify-between items-center md:hidden shadow-md">
  <div class="flex items-center">
    <img src={logo} alt="Logo" class="h-9 mr-2"/>
    <p class="text-text-logo font-bold text-xl">Cuacane</p>
  </div>
  <button on:click={toggleMenu} class="text-gray-800">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
</div>

{#if showMenu}
  <div class="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden">
    <Dashboard showLogo={false} />
  </div>
{/if}

<style>
  #centerSection {
    display: flex;
    justify-content: center;
    border-left: 2px solid #E1E8EC;
    border-right: 2px solid #E1E8EC;
    height: 125vh
  }
  main {
    height: 100vh;
  }
  .text-text-logo {
    color: #1A202C;
  }
</style>
