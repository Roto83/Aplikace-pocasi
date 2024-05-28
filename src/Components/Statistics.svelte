<script lang="ts">
    import "../app.css";

    export let weatherData = null;

</script>

<div>
    <div class="flex justify-between mt-8">
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl">
            <div class="flex flex-col">
                <p class="font-medium text-xl">Wind</p>
                <p class="text-base font-normal text-text-normal">Today wind speed</p>
                <p class="font-medium text-xl">{weatherData !== null ? weatherData.list[0].wind.speed + 'km/h': 'km/h'}</p>
            </div>
        </div>
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl">
            <div>

            </div>
        </div>
    </div>
    <div class="flex justify-between mt-8">
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl">
            <div>

            </div>
        </div>
        <div class="w-[356px] h-[160px] bg-tertiary rounded-xl">
            <div>

            </div>
        </div>
    </div>
</div>