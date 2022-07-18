
var seconds = 00; 
var tens = 00; 
var minuts = 00;

var Interval ;

let chek = 0 ;
let list = [];

var appendminuts = document.getElementById("minuts")
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

var circle = document.getElementById('button_circle')
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
