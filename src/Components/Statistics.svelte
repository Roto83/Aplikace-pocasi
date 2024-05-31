<script lang="ts">
    import "../app.css";
    import compas from "../assets/compas.png";
    import rainChance from "../assets/rain-chance.png";
    import pressure from "../assets/pressure.png";
    import uvIndex from "../assets/uv-index.png";

    export let weatherData = null;

</script>

<div class="mb-10">
    <div class="flex justify-between mt-8">
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl flex items-center">
            <div class="flex flex-col m-auto">
                <p class="font-medium text-xl">Wind</p>
                <p class="text-base font-normal text-text-normal">Today wind speed</p>
                <p class="font-medium text-xl">{weatherData !== null ? weatherData.list[0].wind.speed + 'km/h': 'km/h'}</p>
            </div>
            <img src={compas} alt="Compas icon" class="h-[100px] w-[100px] m-auto"/>
        </div>
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl flex items-center">
            <div class="flex flex-col m-auto">
                <p class="font-medium text-xl">Rain chance</p>
                <p class="text-base font-normal text-text-normal my-3">Today rain chance</p>
                <p class="font-medium text-xl">24%</p>
            </div>
            <img src={rainChance} alt="Rain chance icon" class="h-[100px] w-[100px] m-auto"/>
        </div>
    </div>
    <div class="flex justify-between mt-8">
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl flex items-center">
            <div class="flex flex-col m-auto">
                <p class="font-medium text-xl">Pressure</p>
                <p class="text-base font-normal text-text-normal my-3">Today pressure</p>
                <p class="font-medium text-xl">720 hpa</p>
            </div>
            <img src={pressure} alt="Compas icon" class="h-[80px] w-[100px] m-auto"/>
        </div>
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl flex items-center">
            <div class="flex flex-col m-auto">
                <p class="font-medium text-xl">UV Index</p>
                <p class="text-base font-normal text-text-normal my-3">Today UV Index</p>
                <p class="font-medium text-xl">2</p>
            </div>
            <img src={uvIndex} alt="Compas icon" class="h-[80px] w-[100px] m-auto"/>
        </div>
    </div>
</div>