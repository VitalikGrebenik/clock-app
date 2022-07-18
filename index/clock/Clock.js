function showTime(){
    let date = new Date();
	
    let h = date.getHours(); // 0 - 23
	let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59

	let yr = date.getFullYear(); // год
	let mo = date.getMonth();
	let dy = date.getDate();
	var days = date.getDay();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
	let time = `${h}:${m}:${s}`
	let data = `${yr} ${months[mo]} ${dy} ${dayOfWeek[days]} `
	
    document.getElementById("MyClockDisplay").innerText = time;

	document.getElementById("MyClocksDays").innerHTML = data;
    
    setTimeout(showTime, 1000);
}

showTime();



function clockTimer()
{
  var date = new Date();
  
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var days = date.getDay();
  
  var current_time = [time[0],time[1],time[2]].join(':');
  var clock = document.getElementById("clock");
  var day = document.getElementById("dayOfWeek");
  
  clock.innerHTML = current_time;
  day.innerHTML = dayOfWeek[days];
  
  
  
  setTimeout("clockTimer()", 1000);
}