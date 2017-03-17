
(function(){
console.log("mic check")
//array with different players and each div within the section
let players = [
["player1", "#"],
["player2", "#"],
["player3", "#"],
["player4", "#"],
];
//array of different colors
let colors = ["pink", "blue", "green", "purple"]
//array of all of the different jewelry
let jewelry = [
["necklace", "images/necklace.png"],
["ring", "images/ring.png"],
["earring", "images/earring.png"],
["bracelet", "images/bracelet.png"],
["crown", "images/crown.png"],
["freebee", ""]
];
//random number function
let randomJewels = jewelry[Math.floor(Math.random()*jewelry.length)];

  let spinner = $("#spinner");
  let hoverBoard = document.getElementById("board");
  // let changeSpinner = function() {
  //   hoverBoard.addEventListener("mouseover", function() {
  //    spinner.css({"animation": "spin-right 1s infinite"});
  //    spinner.css({"transform": "rotate(360deg)"})
  //    })
  // }
  // changeSpinner()
// let a = {"animation-direction": "spin-right"}
// let b = {"animation-timing-function": "1.2s"}
// let c = {"animation-iteration-count": "infinite"}
//   let spinner = $("#spinner")
//   let changeSpinner = function(){
//      spinner.css(a+b+c)
//    }
  // let undoSpinner = function() {
  //   spinner.css({"animation": ""})
  // }
  // spinner.on("click", function() {
  //   undoSpinner()
  // })
// console.log(spinner.position().top)
// console.log(spinner.position().left)
// console.log(spinner.position().right)
// console.log(spinner.position().bottom)
  // spinner.on("click", function(){
  //   changeSpinner()
  // })
  //this adds a line of css to the spinner making it spin


// var for space bar
// space bar stops and starts the spinning
// let spacebar = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
// document.addEventListener('keydown', function() {
//   console.log(which)
// })

//make a function
// let hoverBoard = document.getElementById("board")

// let fullRotation = function() {
//   hoverBoard.addEventListener("mouseout", function (){
//   // spinner.css({"transform": "rotate(360deg)"})
//   spinner.css({"animation": ""})
//   })
// }
// fullRotation()




let randomDegree = function() {
  let degree = parseInt([Math.floor(Math.random()*360)]);
  return degree;
}

// let luckyStop = function() {
//   hoverBoard.addEventListener("click", function() {
//     let randomNum = randomDegree()
//     console.log(randomNum);
//     spinner.css({"animation": ""})
//     spinner.css({"transform": "rotate(" + randomNum + "deg)"})
//   })

// }
// luckyStop()

// let doSomething = function() {
//   hoverBoard.addEventListener('mouseover', function() {
//     changeSpinner()
//   });
//   luckyStop();
//   fullRotation()
//   // hoverBoard.addEventListener('click', function() {
//     // undoSpinner()


//   }

// doSomething()

let interactiveSpinner = function() {
  let spinnerSpot = randomDegree()
  let startSpinner = function() {
    hoverBoard.addEventListener("mouseover", function() {
     let theDiff = 360 - spinnerSpot
     let addTo = theDiff + spinnerSpot
     // console.log(addTo)
     spinner.css({"animation": "spin-right 1s infinite"});
     spinner.css({"transform": "rotate(" + addTo + "deg)"});
     });
  }
  startSpinner()
  let stopSpinner = function() {
    hoverBoard.addEventListener("mouseout", function() {
     // let randomNum = randomDegree()
     console.log(spinnerSpot);
     spinner.css({"animation": ""});
     spinner.css({"transform": "rotate(" + spinnerSpot + "deg)"});
    });
  let giveMeJewelry = function() {
  // let spinnerSpot = randomDegree();
  if(spinnerSpot >=0 && spinnerSpot<30){
    console.log("ring");
  } else if(spinnerSpot>=30 && spinnerSpot<90){
    console.log("crown");
  } else if(spinnerSpot>=90 && spinnerSpot<150){
    console.log("bracelet");
  } else if(spinnerSpot>=150 && spinnerSpot<210){
    console.log("earring");
  } else if(spinnerSpot>=210 && spinnerSpot<270){
    console.log("necklace");
  } else if(spinnerSpot>=270 && spinnerSpot<330){
    console.log("free");
  } else {
    console.log("ring");
  }
}
giveMeJewelry()









  }
  stopSpinner()
}
interactiveSpinner()

// let giveMeJewelry = function() {
//   // let spinnerSpot = randomDegree();
//   if(spinnerSpot >=0 && spinnerSpot<30){
//     console.log("ring");
//   } else if(spinnerSpot>=30 && spinnerSpot<90){
//     console.log("crown");
//   } else if(spinnerSpot>=90 && spinnerSpot<150){
//     console.log("bracelet");
//   } else if(spinnerSpot>=150 && spinnerSpot<210){
//     console.log("earring");
//   } else if(spinnerSpot>=210 && spinnerSpot<270){
//     console.log("necklace");
//   } else if(spinnerSpot>=270 && spinnerSpot<330){
//     console.log("free");
//   } else {
//     console.log("ring");
//   }
// }
// giveMeJewelry()












})();
