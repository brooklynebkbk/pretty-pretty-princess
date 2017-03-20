(function(){
console.log("mic check")

let player1Jewels = new Array(6)


let randomDegree = function() {
  let degree = parseInt([Math.floor(Math.random()*360)]);
  return degree;
};

let spinner = $("#spinner");

let hoverBoard = document.getElementById("board");

let loser = [];


let changeSpinner = function() {
  hoverBoard.addEventListener("mouseover", function() {
   spinner.css({"animation": "spin-right .45s linear infinite"});
   spinner.css({"transform": "rotate(0deg)"});
   $("#instruction").empty().append("Click to Stop!");
   })
  hoverBoard.addEventListener("click", function() {
   spinnerSpot = randomDegree();
   spinner.css({"animation": ""});
   spinner.css({"transform": "rotate(" + spinnerSpot + "deg)"});
   let giveMeJewelry = function() {
    if(spinnerSpot >=0 && spinnerSpot<30){
     if(player1Jewels[0] === undefined){
       player1Jewels[0] = "ring";
       $("#instruction").empty().append("<p>Collect Your Ring!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/ring.png'></div>");
       $(".tada").draggable();
       $("#player1").droppable();
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    } else if(spinnerSpot>=30 && spinnerSpot<90){
     if(player1Jewels[0] == "ring" && player1Jewels[2] == "bracelet" && player1Jewels[3] == "earring" && player1Jewels[4] == "necklace" && player1Jewels[5] == "diamond" && player1Jewels[1] === undefined){
       player1Jewels[1] = "crown";
       $("#instruction").empty().append("<p>Collect Your Crown! You Win!!!!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/crown.png'></div>");
       $(".tada").draggable();
       spinner.css({"animation": ""});
       alert("Winner! You've made a very pretty pile!")
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    } else if(spinnerSpot>=90 && spinnerSpot<150){
     if(player1Jewels[2] === undefined){
       player1Jewels[2] = "bracelet";
       $("#instruction").empty().append("<p>Collect Your Bracelet!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/bracelet.png'></div>");
       $(".tada").draggable();
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    } else if(spinnerSpot>=150 && spinnerSpot<210){
     if(player1Jewels[3] === undefined){
       player1Jewels[3] = "earring";
       $("#instruction").empty().append("<p>Collect Your Earrings!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/earring.png'></div>");
       $(".tada").draggable();
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    } else if(spinnerSpot>=210 && spinnerSpot<270){
     if(player1Jewels[4] === undefined){
       player1Jewels[4] = "necklace";
       $("#instruction").empty().append("<p>Collect Your Necklace!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/necklace.png'></div>");
       $(".tada").draggable();
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    } else if(spinnerSpot>=270 && spinnerSpot<330){
     if(player1Jewels[5] === undefined){
       player1Jewels[5] = "diamond";
       $("#instruction").empty().append("<p>Collect Your Diamond!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/free.png'></div>");
       $(".tada").draggable();
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    } else {
      if(player1Jewels[0] === undefined){
       player1Jewels[0] = "ring";
       $("#instruction").empty().append("<p>Collect Your Ring!</p>");
       $("#playerTurn").append("<div class='tada'><img src='images/ring.png'></div>");
       $(".tada").draggable();
      } else {
       $("#instruction").empty().append("<p>Spin Again!</p>");
       loser.push("tick");
       if(loser.length > 9){
       alert("Your pile is very ugly. You lose.");
       $("#instruction").empty().append("loser!");
       }
      }
    }
   }
   giveMeJewelry()
  })
}
changeSpinner()




















































})();
