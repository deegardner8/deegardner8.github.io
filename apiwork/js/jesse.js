const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
console.table(towns);
        for (let i = 0; i < towns.length; i++) {

            let towns2 = towns[i];
            let townNames = ["Fish Haven", "Preston", "Soda Springs"];
            /*if (townNames.includes(towns.name))*/
            {


                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let alt = document.createElement('alt');

                h2.textContent = towns2.name;
                motto.textContent = 'Motto: ' + towns2.motto;
                year.textContent = 'Year Founded: ' + towns2.yearFounded;
                pop.textContent = 'Population: ' + towns2.currentPopulation;
                rain.textContent = 'Annual Rainfall: ' + towns2.averageRainfall;

                section.appendChild(name);
                section.appendChild(alt);
                section.appendChild(motto);
                section.appendChild(year);
                section.appendChild(pop);
                section.appendChild(rain);

                let image = createElement('img');
                image.setAttribute('alt', towns2.name);
                image.setAttribute('src', "images/" + towns2.photo);

                document.querySelector('div.town').appendChild(section);
            }
        }

    });