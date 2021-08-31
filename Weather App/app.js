const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {
    const inputBtn = document.getElementById("input_btn").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputBtn + '&appid=b04cdeb08a6cececf803640cb65f1c1d')
        //fetch('https://')
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const desc = data.weather[0].description;

            document.getElementById('city').innerText = cityName;
            document.getElementById("temp").innerText = temp.toFixed(2);
            document.getElementById("desc").innerText = desc;
        })
})