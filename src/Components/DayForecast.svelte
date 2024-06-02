<script>
    export let dayName;
    export let date;
    export let temperature;
    export let icon;

  </script>
  
  <div class="day-forecast flex items-center p-2 borde w-80 justify-between">
    <div class="w-20">
        <div class="font-medium mb-2">{dayName}</div>
        <div class="text-[#999999]">{date}</div>
    </div>
    <div class="mt-2">{temperature}°C</div>
    <img class="mt-3 w-12" src={icon} alt="Weather Icon">
  </div>