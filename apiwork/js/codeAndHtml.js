const wApi = 'https://api.openweathermap.org/data/2.5/forecast?id=4671654&appid=823be26e0a04b3f099aa4787a6ebe4eb&units=imperial';


fetch(wApi)
  .then((response) => response.json())
  .then((jsonObject) => {
    const sixOclock = jsonObject['list'];
    

    const smallerCabinet = sixOclock.filter(isSixOclock);
    console.table(jsonObject);
    console.table(smallerCabinet);
    smallerCabinet.forEach(list => {
        const imagesrc = 'https://openweathermap.org/img/w/' + list.weather[0].icon + '.png';
     
        document.getElementById('testTable').innerHTML +=
        `<span>${list.main.temp.toFixed(0)}<img src="${imagesrc}"</img><span>`

        document.getElementById('testTable2').innerHTML +=
        `<tr><td>Actual Temperature ${list.main.temp}</td><td> Feels like: ${list.main.feels_like}</td><td><img src="${imagesrc}"</td></tr>`
    
    
        
    });

  });

  function isSixOclock(afterNoon) {
    return afterNoon.dt_txt.includes("18:00:00");
 }