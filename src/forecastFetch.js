function ForecastFetch(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=134172c2ea1a234d8cdf9065571deedd`)
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
  
export default ForecastFetch