et input = document.querySelector("input");

let button = document.querySelector("button");


button.addEventListener("click",getWeather);

function getWeather(){
    let text = input.value;
    
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=6e751fc6e3699df7c2b3660247b0424c`).then((resp) => resp.json()).then((data)=>{
         console.log(data);
         let paraTemp = document.querySelector("#temp");
         paraTemp.textContent = data.main.temp;
         let paraHumidity = document.querySelector("#humidity");
         paraHumidity.textContent = data.main.humidity;
     }).catch((err)=>{
         console.log(err);
     })


     
    
}
