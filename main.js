 
 const getCountry=async()=>{
        const response=await fetch("https://restcountries.com/v3.1/all")
        const details=await response.json()
        const country=details[Math.floor(Math.random()*details.length)]
        const flag=country.flags.png
        const cname=country.name.common
        const capital=country.capital
        const population=country.population
        const timezones=country.timezones
        const continents=country.continents
        const languages=Object.values(country.languages)
        const currencies=Object.values(country.currencies)
        const currencyName=currencies[0].name
        console.log(currencyName);
        const currencySymbol=currencies[0].symbol
        const gmap=country.maps.googleMaps
            result.innerHTML=`
            <div class="card mt-5 " style="width: 18rem;">
        <img src="${flag}" class="card-img-top" alt="...">
        <h4 class="text-center fw-bolder ">${cname}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital:<b>${capital}</b></li>
          <li class="list-group-item">Population:<b>${population}</b></li>
          <li class="list-group-item">Timezones:<b>${timezones}</b></li>
          <li class="list-group-item">Continents:<b>${continents}</b></li>
          <li class="list-group-item">Languages:<b>${languages}</b></li>
          <li class="list-group-item">Currencies:<b>${currencyName}${currencySymbol}</b></li>
        </ul>
        <div class="card-body">
          <a href="${gmap}" class="card-link">View Map</a>
        </div>
      </div>
            `
    }

