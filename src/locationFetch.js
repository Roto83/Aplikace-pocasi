function LocationFetch(cityName, countryCode) {
    if (arguments.length > 0){
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},,${countryCode}&limit=5&appid=134172c2ea1a234d8cdf9065571deedd`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
        console.log(data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }
}
  
export default LocationFetch
