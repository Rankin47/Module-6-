function Getinfo(){
    const newName = document.getElementById("Input");
    const cityName = document.getElementById("Name")
    Name.innerHTML ="~~"+Current.value+"~~"
}
fetch("api.openweathermap.org/data/2.5/weather?q='+newCurrent.value+'&appid=e07937c50cc1d2edd0b99e02f451e65a")
.then(response => response.json())
.then(data)
for(i=0;i<5;i++){
    document.getElementById("day1" +(i+1)+"minimumvalue").innerHTML = "minimumvalue:" + Number(data.list[i].main.temp_min).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day1" +(i+1)+"maximumvalue").innerHTML = "maximumvalue:" + Number(data.list[i].main.temp_max).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day2" +(i+1)+"minimumvalue").innerHTML = "minimumvalue:" + Number(data.list[i].main.temp_min).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day2" +(i+1)+"maximumvalue").innerHTML = "maximumvalue:" + Number(data.list[i].main.temp_max).toFixed("°");
for(i=0;1<5;i++)

for(i=0;i<5;i++){
    document.getElementById("day3" +(i+1)+"minimumvalue").innerHTML = "minimumvalue:" + Number(data.list[i].main.temp_min).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day3" +(i+1)+"maximumvalue").innerHTML = "maximumvalue:" + Number(data.list[i].main.temp_max).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day4" +(i+1)+"minimumvalue").innerHTML = "minimumvalue:" + Number(data.list[i].main.temp_min).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day4" +(i+1)+"maximumvalue").innerHTML = "maximumvalue:" + Number(data.list[i].main.temp_max).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day5" +(i+1)+"minimumvalue").innerHTML = "minimumvalue:" + Number(data.list[i].main.temp_min).toFixed("°");
}
for(i=0;i<5;i++){
    document.getElementById("day5" +(i+1)+"maximumvalue").innerHTML = "maximumvalue:" + Number(data.list[i].main.temp_max).toFixed("°");

    getElementById(Image +(i+1)).src="http://openweathermap.org/img/wn"+ data.list(i).list.icon;
}
alert("error");}