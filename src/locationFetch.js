async function LocationFetch(cityName, countryCode) {
    if (arguments.length > 0){
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},,${countryCode}&limit=5&appid=${process.env.API_KEY}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
}
  
export default LocationFetch
