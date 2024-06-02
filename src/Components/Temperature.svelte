<script lang="ts">
    import "../app.css";
    import location from "../assets/location.svg";
    import windy from "../assets/windy.svg";
    import drop from "../assets/drop.svg";
    import breeze from "../assets/breeze.svg";
    import graph from "../assets/graph.png"

    export let weatherData = null;
</script>

<div class="bg-primary w-full mt-20 md:mt-0 md:w-[745px] h-[46rem] md:h-[344px] rounded-xl flex flex-col md:flex-row">  <!-- Update layout for mobile -->
    <div class="w-full md:w-1/2 h-full">
        <div class="p-7 justify-between flex h-1/4">
            <div class="flex">
                <img src={location} alt="Location icon" class="w-6"/>
                <p class="text-secondary font-semibold mx-2 text-xl">{weatherData !== null ? weatherData.city.name + ", " + weatherData.city.country : 'Loading...'}</p>
            </div>
            <p class="text-secondary mt-1 text-sm font-normal">{weatherData !== null ? weatherData.list[0].dt_txt : ''}</p>
        </div>
        <div class="text-secondary text-center h-1/2 flex flex-col justify-center">
            <div class="flex justify-center pl-4">
                <p class="text-[100px]">{weatherData !== null ? weatherData.list[0].main.temp + "" : ''}</p>
                <p class="text-5xl">°</p>
            </div>
            <p class="text-base font-medium mt-4">{weatherData !== null ? weatherData.list[0].weather[0].main + "" : ''}</p>
        </div>
        <div class="flex text-secondary text-sm font-semibold justify-between h-1/4 items-center px-7">
            <div class="flex">
                <img src={windy} alt="Windy icon" class="w-6 mx-2"/>
                <p class="mt-0.5">{weatherData !== null ? weatherData.list[0].main.pressure + " hpa" : 'hpa'}</p>
            </div>
            <div class="flex">
                <img src={drop} alt="Drop icon" class="w-6 mx-2"/>
                <p class="mt-0.5">{weatherData !== null ? weatherData.list[0].main.humidity + " %" : '%'}</p>
            </div>
            <div class="flex">
                <img src={breeze} alt="Breeze icon" class="w-6 mx-2"/>
                <p>{weatherData !== null ? weatherData.list[0].wind.speed + ' km/h': 'km/h'}</p>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/2 h-full flex items-center justify-center">
        <div class="backdrop-blur-md bg-white/30 h-5/6 w-5/6 rounded-xl">
            <div class="h-1/4 flex items-center text-secondary font-semibold text-xl ml-5">
                <p>Temperature</p>
            </div>
            <div class="h-1/2">
                <img src={graph} alt="Graph" class=" w-80">
            </div>
            <div class="h-1/4 flex justify-between text-secondary items-center px-7">
                <div class="flex flex-col items-center">
                    <p class="text-xs">+ 3h</p>
                    <p class="text-sm font-semibold">{weatherData !== null ? weatherData.list[1].main.temp + "" : ''}°</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-xs">+ 6h</p>
                    <p class="text-sm font-semibold">{weatherData !== null ? weatherData.list[2].main.temp + "" : ''}°</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-xs">+ 9h</p>
                    <p class="text-sm font-semibold">{weatherData !== null ? weatherData.list[3].main.temp + "" : ''}°</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-xs">+ 12h</p>
                    <p class="text-sm font-semibold">{weatherData !== null ? weatherData.list[4].main.temp + "" : ''}°</p>
                </div>
            </div>
        </div>
    </div>
</div>
