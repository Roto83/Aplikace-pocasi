<script>
    import logo from "../assets/logo.png";
    import category from "../assets/category.png";
    import activity from "../assets/activity.svg";
    import heart from "../assets/heart.svg";
    import calendar from "../assets/calendar.svg";
    import setting from "../assets/setting.svg";
    import logout from "../assets/logout.svg";
  
    export let showLogo = false;  // Add a prop to control logo visibility
  </script>
  
  <div class="dashboard">
    {#if showLogo}
      <div class="flex justify-center items-center mt-12 md:mt-10">
        <img src={logo} alt="Logo" class="h-9 mr-2"/>
        <p class="text-text-logo font-bold text-xl hidden md:block">Cuacane</p>
      </div>
    {/if}
    <div class="flex justify-center mt-14">
      <ul>
        <a href="javascript:void(0);"><li class="text-text-dashboard font-semibold text-sm mt-14 flex items-center"><img src={category} alt="Category icon" class="mr-2 w-6"/> Dashboard</li></a>
        <a href="javascript:void(0);"><li class="text-text-dashboard font-normal text-sm mt-14 flex items-center"><img src={activity} alt="Activitiy icon" class="mr-2 w-6"/> Map</li></a>
        <a href="javascript:void(0);"><li class="text-text-dashboard font-normal text-sm mt-14 flex items-center"><img src={heart} alt="Heart icon" class="mr-2 w-6"/> Saved Location</li></a>
        <a href="javascript:void(0);"><li class="text-text-dashboard font-normal text-sm mt-14 flex items-center"><img src={calendar} alt="Calendar icon" class="mr-2 w-6"/> Calendar</li></a>
        <a href="javascript:void(0);"><li class="text-text-dashboard font-normal text-sm mt-14 flex items-center"><img src={setting} alt="Setting icon" class="mr-2 w-6"/> Settings</li></a>
      </ul>
    </div>
    <div class="flex justify-center mt-14">
      <a href="javascript:void(0);"><p class="text-text-dashboard font-light text-sm mt-14 flex items-center text-opacity-70 mr-6 mb-3"><img src={logout} alt="Category icon" class="mr-2 w-6"/> Log Out</p></a>
    </div>
  </div>