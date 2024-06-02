<script lang="ts">
    import arrowLeft from "../assets/arrowLeft.svg";
    import arrowRight from "../assets/arrowRight.svg";
    import whiteSun from "../assets/whiteSun.svg";
    import yellowSun from "../assets/yellowSun.svg";
    import blueSun from "../assets/blueSun.svg";

    import DayForecast from './DayForecast.svelte';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const today = new Date();
    const currentDayIndex = today.getDay();

    const nextDays = [];
    const nextDates = [];

    for (let i = 0; i < 6; i++) {
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + i);
        
        const nextDayIndex = (currentDayIndex + i) % 7;
        nextDays.push(daysOfWeek[nextDayIndex]);
        
        const day = nextDate.getDate();
        const month = nextDate.getMonth() + 1;
        nextDates.push(`${day} ${months[month]}`);
    }

    export let weatherData = null;

    const forecastData = [
    { dayName: 'Today', date: nextDates[0], temperature: 15, icon: yellowSun },
    { dayName: 'Tommorow', date: nextDates[1], temperature: 16, icon: yellowSun },
    { dayName: nextDays[2], date: nextDates[2], temperature: 18, icon: yellowSun },
    { dayName: nextDays[3], date: nextDates[3], temperature: 20, icon: blueSun },
    { dayName: nextDays[4], date: nextDates[4], temperature: 21, icon: yellowSun },
    { dayName: nextDays[5], date: nextDates[5], temperature: 19, icon: blueSun },
  ];
</script>

<div class="timeline-container md:w-1/4 w-full md:order-last md: ml-8">
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
                <p class="text-text-dashboard font-semibold">{weatherData !== null ? weatherData.list[0].main.temp + "" : ''}°</p>
            </div>
            <div class="flex flex-col w-16 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">+ 3h</p>
                <img src={yellowSun} alt="Yellow sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">{weatherData !== null ? weatherData.list[1].main.temp + "" : ''}°</p>
            </div>
            <div class="flex flex-col w-16 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">+ 6h</p>
                <img src={yellowSun} alt="Yellow sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">{weatherData !== null ? weatherData.list[2].main.temp + "" : ''}°</p>
            </div>
            <div class="flex flex-col w-16 h-28 rounded-xl items-center justify-center">
                <p class="text-text-dashboard text-xs">+ 9h</p>
                <img src={yellowSun} alt="Yellow sun" class="w-8 my-3"/>
                <p class="text-text-dashboard font-semibold">{weatherData !== null ? weatherData.list[3].main.temp + "" : ''}°</p>
            </div>
        </div>
    </div>
    <div class="timeline flex overflow-x-auto p-5 flex-col">
        {#each forecastData as forecast, index}
          <DayForecast
            dayName={forecast.dayName}
            date={forecast.date}
            temperature={weatherData !== null ? weatherData.list[0 + index * 7].main.temp + "" : ''}
            icon={forecast.icon}
          />
        {/each}
      </div>
</div>

<style>
    /* Adjust styles for the timeline container */
    .timeline-container {
        /* On mobile, make it full width */
        width: 100%;
    }

    /* Add styles to push Timeline below other sections on mobile */
    @media (max-width: 767px) {
        .timeline-container {
            width: 90%;
            align-items: center;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 95rem
        }
    }
</style>