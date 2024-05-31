async function ForecastFetch(lat, lon) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=134172c2ea1a234d8cdf9065571deedd&units=metric`);
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
  
export default ForecastFetch