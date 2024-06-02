<script>
    import SearchIcon from '../assets/search.svg';
    import "../app.css";
    import Bell from "../assets/bell.svg";
    import Profile from "../assets/profile.svg";
    import SearchLocation from '../searchLocation';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let searchActive = true;
    let searchValue = '';
    let timer;
    let cityData = null;
    let searchList;
    let items = [];

    $: if (searchValue) {
        if (searchActive) {
            if (searchValue.length <= 1) {
                searchList.style.visibility = "collapse";
            }
            startOrResetTimer();
        }
    }

    function startOrResetTimer() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            if (searchValue.length > 1) {
                for (let index = 0; index < 5; index++) {
                    items.pop();
                }
                getLocationData();
                searchList.style.visibility = "visible";
            }
        }, 2000);
    }

    async function getLocationData() {
        cityData = await SearchLocation(searchValue);
        for (let index = 0; index < cityData.length; index++) {
            items.push(cityData[index]);
        }
    }

    function sendForSearch(index) {
        dispatch('sendData', { lat: items[index].lat, lon: items[index].lon});
        searchValue = items[index].name + ", " + items[index].country;
        searchList.style.visibility = "collapse";
        for (let index = 0; index < 5; index++) {
            items.pop();
        }
    }

    function deactivateSearch() {
        searchActive = false;
    }

    function activateSearch() {
        searchActive = true;
    }

</script>

<div class="flex flex-col relative hidden md:flex">  <!-- Hide on mobile with hidden md:flex -->
    <div class="flex h-32 w-full justify-between">
        <div class="flex">
            <img src={SearchIcon} alt="Search icon" class="w-5 text-gray-400 ml-2"/>
            <input type="text" bind:value={searchValue} on:blur={deactivateSearch} on:focus={activateSearch} placeholder="Search something here..." class="pl-6 focus:outline-none"/>
        </div>
        <img src={Bell} alt="Bell icon" class="w-6 relative left-36"/>
        <img src={Profile} alt="Profile icon" class="w-10"/>
    </div>
    <div class="flex w-full justify-between absolute top-24 z-10 h-max">
        <ul bind:this={searchList} class="w-full font-bold shadow-2xl h-max collapse">
            {#each items as item, index}
                <li class="cursor-pointer p-5 hover:bg-gray-200 w-full bg-white" on:click={() => sendForSearch(index)}>{cityData !== null ? cityData[index].name + ", " + cityData[index].country : '...'}</li>
            {/each}
        </ul>
    </div>
</div>
