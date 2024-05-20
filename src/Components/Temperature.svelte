<script lang="ts">
    import "../app.css";
    import location from "../assets/location.svg";
    import windy from "../assets/windy.svg";
    import drop from "../assets/drop.svg";
    import breeze from "../assets/breeze.svg";
</script>

<div class="bg-primary w-[745px] h-[344px] rounded-xl flex">
    <div class="w-1/2 h-full">
        <div class="p-7 justify-between flex h-1/4">
            <div class="flex">
                <img src={location} alt="Location icon" class="w-6"/>
                <p class="text-secondary font-semibold mx-2 text-xl">Gotham</p>
            </div>
            <p class="text-secondary mt-1 text-sm font-normal">Today 00:32 PM</p>
        </div>
        <div class="text-secondary text-center h-1/2 flex flex-col justify-center">
            <div class="flex justify-center pl-4">
                <p class="text-[100px]">14</p>
                <p class="text-5xl">°</p>
            </div>
            <p class="text-base font-medium mt-4">Mostly clear</p>
        </div>
        <div class="flex text-secondary text-sm font-semibold justify-between h-1/4 items-center px-7">
            <div class="flex">
                <img src={windy} alt="Windy icon" class="w-6 mx-2"/>
                <p class="mt-0.5">720hpa</p>
            </div>
            <div class="flex">
                <img src={drop} alt="Drop icon" class="w-6 mx-2"/>
                <p class="mt-0.5">32%</p>
            </div>
            <div class="flex">
                <img src={breeze} alt="Breeze icon" class="w-6 mx-2"/>
                <p>12km/h</p>
            </div>
        </div>
    </div>
    <div class="w-1/2 h-full flex items-center justify-center">
        <div class="backdrop-blur-md bg-white/30 h-5/6 w-5/6 rounded-xl">
            <div class="h-1/4 flex items-center text-secondary font-semibold text-xl ml-5">
                <p>Temperature</p>
            </div>
            <div class="h-1/2">

            </div>
            <div class="h-1/4 flex justify-between text-secondary items-center px-7">
                <div class="flex flex-col items-center">
                    <p class="text-xs">Morning</p>
                    <p class="text-sm font-semibold">15°</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-xs">Afternoon</p>
                    <p class="text-sm font-semibold">14°</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-xs">Evening</p>
                    <p class="text-sm font-semibold">16°</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-xs">Night</p>
                    <p class="text-sm font-semibold">12°</p>
                </div>
            </div>
        </div>
    </div>
</div>