let weather = {
    apiKey : "Insert App Key",
    fetchWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&appid="
        +this.apiKey
        +"&units=imperial"
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const {name} = data;
        const {temp, humidity, feels_like, temp_min, temp_max} = data.main;
        const {description} = data.weather[0];
        document.querySelector(".city").innerHTML = "Today's Forecast in " + name + ":";
        document.querySelector(".temp").innerHTML = "Temp : " + temp + " °F";
        document.querySelector(".desc").innerHTML ="Description : " + description;
        document.querySelector(".feels").innerHTML = "Feels Like : " + feels_like + " °F";
        document.querySelector(".min").innerHTML = "Min : " + temp_min + " °F";
        document.querySelector(".max").innerHTML = "Max : " + temp_max + " °F";
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
    },
    search : function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".searchBar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Philadelphia");