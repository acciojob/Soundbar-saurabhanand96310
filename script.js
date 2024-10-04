//your JS code here. If required.
// const musicbtn=document.querySelectorAll(".btn");
let s1 = new Audio('applause.mp3');
let s2 = new Audio('boo.mp3');
let s3 = new Audio('gasp.mp3');
let s4 = new Audio('tada.mp3');
let s5 = new Audio('victory.mp3');
let s6 = new Audio('wrong.mp3');

function pauseAll() {
	s6.pause() 
	s1.pause() 
	s2.pause() 
	s3.pause()
	s4.pause() 
	s5.pause()
}