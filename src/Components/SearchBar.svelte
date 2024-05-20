<script>
    import SearchIcon from '../assets/search.svg';
    import "../app.css";
    import Bell from "../assets/bell.svg";
    import Profile from "../assets/profile.svg";
</script>
  
<div class="flex h-32 justify-between">
    <div class="flex">
        <img src={SearchIcon} alt="Search icon" class="w-5 text-gray-400 ml-2"/>
        <input
        type="text"
        placeholder="Search something here..."
        class="pl-6 focus:outline-none"
        />
    </div>
    <img src={Bell} alt="Bell icon" class="w-6 relative left-36"/>
    <img src={Profile} alt="Profile icon" class="w-10"/>
</div>
  
  