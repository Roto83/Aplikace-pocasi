<script lang="ts">
    import arrowLeft from "../assets/arrowLeft.svg";
    import arrowRight from "../assets/arrowRight.svg";
    import whiteSun from "../assets/whiteSun.svg";
    import yellowSun from "../assets/yellowSun.svg";
    import blueSun from "../assets/blueSun.svg";

    import DayForecast from './DayForecast.svelte';

    const forecastData = [
    { dayName: 'Tomorrow', date: '12 Apr', temperature: 15, icon: yellowSun },
    { dayName: 'Monday', date: '13 Apr', temperature: 16, icon: yellowSun },
    { dayName: 'Tuesday', date: '14 Apr', temperature: 18, icon: yellowSun },
    { dayName: 'Wednesday', date: '15 Apr', temperature: 20, icon: blueSun },
    { dayName: 'Thursday', date: '16 Apr', temperature: 21, icon: yellowSun },
    { dayName: 'Friday', date: '17 Apr', temperature: 19, icon: blueSun },
    { dayName: 'Saturday', date: '18 Apr', temperature: 22, icon: yellowSun },
  ];
</script>

<div class="flex flex-col items-center">
    <div class="flex items-center mt-12">
        <img src={arrowLeft} alt="Arrow left"/>
        <p class="mx-24 text-xl">This Week</p>
        <img src={arrowRight} alt="Arrow right" />
    </div> 
    <div class="mt-10 w-80">
        <p class="">Today</p>
        <div class="flex mt-5 justify-between">
            <div class="flex flex-col bg-[#C4E2FF] w-20 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">Now</p>
                <img src={whiteSun} alt="White sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">24°</p>
            </div>
            <div class="flex flex-col w-16 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">01 PM</p>
                <img src={yellowSun} alt="Yellow sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">26°</p>
            </div>
            <div class="flex flex-col w-16 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">02 PM</p>
                <img src={yellowSun} alt="Yellow sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">25°</p>
            </div>
            <div class="flex flex-col w-16 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">03 PM</p>
                <img src={yellowSun} alt="Yellow sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">25°</p>
            </div>
        </div>
    </div>
    <div class="timeline flex overflow-x-auto p-5 flex-col">
        {#each forecastData as forecast}
          <DayForecast
            dayName={forecast.dayName}
            date={forecast.date}
            temperature={forecast.temperature}
            icon={forecast.icon}
          />
        {/each}
      </div>
</div>