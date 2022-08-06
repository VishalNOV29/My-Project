// let start = document.getElementById("btn1");
//       let stop = document.getElementById("btn2");
//       let play=document.getElementById('btn1')
//       let road = document.getElementById("road");
//       let wheel1 = document.getElementById("wheel1");
//       let wheel2 = document.getElementById("wheel2");

//       function stopFun() {
//         road.style.animation = "none";
//         wheel1.style.animation = "none";
//         wheel2.style.animation = "none";
//       }
//       function startFun() {
//         road.style.animation='roadanimation 10s linear infinite'
//         wheel1.style.animation='wheelanimation 1s linear infinite'
//         wheel2.style.animation='wheelanimation 1s linear infinite'
//       }
//       function changeText(){
//         if(play.innerHTML=='START'||.style.animation==''){
//           play.innerHTML='STOP'
//         } else{
//           play.innerHTML="START"
//         }
//       }

// let start = document.getElementById("btn1");
// let stop = document.getElementById("btn2");
// let start = document.getElementById("btn1");
// let road = document.getElementById("road");
// let wheel1 = document.getElementById("wheel1");
// let wheel2 = document.getElementById("wheel2");
// function startStop() {
//   if (
//     start.innerHTML == "START" &&
//     road.style.animation == "none" &&
//     wheel1.style.animation=='none' &&
//     wheel2.style.animation=='none'
//   ) {start.innerHTML='STOP'
//   road.innerHTML='roadanimation 10s linear infinite'
//   wheel1.style.animation='wheelanimation 1s linear infinite'
//   wheel2.style.animation='wheelanimation 1s linear infinite'
//   }else{
//     road.style.animation='none'
//     start.innerHTML='START'
//     wheel1.style.innerHTML='none'
//     wheel2.style.innerHTML='none'
//   }
// }

// let wheel1 = document.getElementById("wheel1");
// let wheel2 = document.getElementById("wheel2");
// let wheel = document.getElementsByClassName("wheel");
// let road = document.getElementById("road");
// function start() {
//   wheel1.style.animation = "wheelanimation 1s linear infinite";
//   wheel2.style.animation = "wheelanimation 1s linear infinite";
//   road.style.animation = "roadanimation 10s linear infinite";
// }
// function stop() {
//   wheel1.style.animation = "none";
//   wheel2.style.animation = "none";
//   road.style.animation = "none";
// }
// let audio = document.getElementById("audio");
// let btn = document.getElementById("btn");
// let count = 0;
// function playPause() {
//   if (count == 0) {
//     count = 1;
//     audio.play();
//   } else {
//     count = 0;
//     audio.pause();
//   }
// }
// function changeText() {
//   if (btn.innerHTML == "Play") {
//     btn.innerHTML = "Pause";
//   } else {
//     btn.innerHTML = "Play";
//   }
// }
