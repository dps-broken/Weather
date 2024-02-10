let Inpt = document.getElementById("cityname");
let NameOfCity = document.getElementById("NameOfCity");
let temperature = document.getElementById("temperature");
let Description = document.getElementById("description");
let GetButton = document.getElementById("GetButton");
let id = document.getElementById("id");




// NameOfCity.innerText = "City_Targated";
// temperature.innerText = "Temperature_Targated";
// Description.innerText = "Description_Targated";

GetButton.addEventListener("click", ()=>{
    let CityNameText = Inpt.value;
    // alert(CityNameText);

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+CityNameText+"&appid=7e2e8742d4ffea60d51e8d26a4d88fc5&units=metric")
    .then((e)=>{
       return e.json();
    })
    .then((Data)=>{
        
     console.log(Data);

     NameOfCity.innerHTML = Data.name
     temperature.innerHTML = Data.main.temp + "°C"
     Description.innerHTML = Data.weather[0].description

    })
    .catch(()=>{
        console.log("nahi aya");
    })
   
})

// GetWether(CityNameText);




