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
	var dayOfWeek = ["Sunday","Mon","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
	// let time = `${h}:${m}:${s}`
	// let data = `${yr} ${months[mo]} ${dy} ${dayOfWeek[days]} `

	document.getElementById("MyClockSecond").innerHTML = s
	document.getElementById("MyClockMinutes").innerHTML = m
	document.getElementById("MyClockHours").innerHTML = h
	document.getElementById("MyClockDays").innerHTML = dy
	document.getElementById("MyClockMonth").innerHTML = months[mo]
	document.getElementById("MyClockYear").innerHTML = yr;
	document.getElementById("MyClockDayOfWeek").innerHTML = dayOfWeek[days];
	
    setTimeout(showTime, 1000);
}

showTime();


// NavBar
const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");

let activeIndex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index) => {
	if (links[index].classList.contains("active")) {
		light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
	}

	link.addEventListener("click", e => {
		activeIndex = index;
		let t = setInterval(() => {
			if (activeIndex > currentIndex) increment = 1;
			else if (activeIndex < currentIndex) increment = -1;
			currentIndex += increment;

			links[currentIndex].classList.add("active");
			if (currentIndex != -1) links[currentIndex - increment].classList.remove("active");

			if (currentIndex == activeIndex) {
				e.target.classList.add("active");
				increment = 0;
				clearInterval(t);
			}
		}, 50);
		light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
	});
});
