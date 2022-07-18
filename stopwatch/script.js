let seconds = 00; 
let tens = 00; 
let minuts = 00;
var Interval ;
let chek = 0 ;
let list = [];


let appendminuts = document.getElementById("minutes")
let appendTens = document.getElementById("millisecond")
let appendSeconds = document.getElementById("second")
let buttonStart = document.getElementById('button_start');
let buttonStop = document.getElementById('button_pause');
let buttonReset = document.getElementById('button_stop');

let circle = document.getElementById('button_circle')
let update = document.getElementById('button_update')

let krug_plus_parent = document.getElementById('krug_plus_parent')


buttonStart.onclick = function() {
	clearInterval(Interval);
	Interval = setInterval(startTimer, 10);
}
buttonStop.onclick = function() {
	clearInterval(Interval);
}

buttonReset.onclick = ()=>{
	reset();
}

circle.onclick = () =>{
	list.push(`${++chek}: ${appendminuts.innerHTML}:${appendSeconds.innerHTML}:${appendTens.innerHTML}`)

	let elemnt = document.createElement('li')
	elemnt.innerHTML = list.slice(-1)
	krug_plus_parent.appendChild(elemnt)
}

update.onclick = () =>{
	while(krug_plus_parent.firstChild){
		krug_plus_parent.removeChild(krug_plus_parent.firstChild)
	}
	chek = 0;
	reset();
	list.length = 0
}

function reset() {
	clearInterval(Interval);
	minuts = "00"
	tens = "00";
	seconds = "00";
	appendminuts.innerHTML = minuts;
	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
}

function startTimer () {
	tens++; 
	if(tens <= 9){
	appendTens.innerHTML = "0" + tens;
	}
	if (tens > 9){
	appendTens.innerHTML = tens;
	} 
	if (tens > 99) {
	seconds++;
	appendSeconds.innerHTML = "0" + seconds;
	tens = 0;
	appendTens.innerHTML = "0" + 0;

	}
	if (seconds > 9){
	appendSeconds.innerHTML = seconds;

	}
	if (seconds > 59){
		minuts++;
		appendminuts.innerHTML = "0" + minuts
		seconds = 0
		appendSeconds.innerHTML = "0" + seconds
	}
	if(minuts>9){
		appendminuts.innerHTML = minuts
	}
}


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
