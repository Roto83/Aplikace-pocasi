<script>
  import Temperature from './Components/Temperature.svelte';
  import SearchBar from "./Components/SearchBar.svelte"
  import Statistics from './Components/Statistics.svelte';
</script>

<main>
  <section id="leftSection">

  </section>
  <section id="centerSection">
    <div>
     <SearchBar />
     <Temperature />
     <Statistics />
    </div>
  </section>
  <section id="rightSection">

  </section>
</main>

<style>
  #leftSection{
    background-color: aqua;
    width: 15%;
    height: 100px;
  }
  #centerSection{
    width: 60%;
    height: 100px;
    display: flex;
    justify-content: center;
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
