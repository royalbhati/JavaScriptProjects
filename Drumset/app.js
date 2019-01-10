const Ad = document.getElementById('A');
const Bd = document.getElementById('B');
const Cd = document.getElementById('C');
const Dd = document.getElementById('D');
const Ed = document.getElementById('E');
const Fd = document.getElementById('F');
const Gd = document.getElementById('G');
// const Ad=document.getElementById("A");

const A = document.getElementById('electric');
const B = document.getElementById('whack');
const C = document.getElementById('punch');
const D = document.getElementById('jab');
const E = document.getElementById('lhook');
const F = document.getElementById('fb');
const G = document.getElementById('burp');

function uniCharCode(event) {
	// console.log(event.keyCode)
	switch (event.keyCode) {
		case 65:
			// console.log("A pressed")
			// ele

			A.play();
			Ad.classList.toggle('blink');
			Ad.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Ad.classList.remove('blink');
				Ad.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
		case 66:
			B.play();
			Bd.classList.toggle('blink');
			Bd.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Bd.classList.remove('blink');
				Bd.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
		case 67:
			C.play();
			Cd.classList.toggle('blink');
			Cd.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Cd.classList.remove('blink');
				Cd.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
		case 68:
			D.play();
			Dd.classList.toggle('blink');
			Dd.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Dd.classList.remove('blink');
				Dd.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
		case 69:
			E.play();
			Ed.classList.toggle('blink');
			Ed.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Ed.classList.remove('blink');
				Ed.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
		case 70:
			F.play();
			Fd.classList.toggle('blink');
			Fd.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Fd.classList.remove('blink');
				Fd.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
		case 71:
			G.play();
			Gd.classList.toggle('blink');
			Gd.setAttribute('style', 'margin-top:10rem;');
			setTimeout(() => {
				Gd.classList.remove('blink');
				Gd.setAttribute('style', 'margin-top:0;');
			}, 1000);

			break;
	}
}
