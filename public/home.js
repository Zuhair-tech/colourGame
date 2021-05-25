var body = document.querySelector('#body');
var playAgain = document.querySelector('#playAgain');
var newColours = document.querySelector('#newColours');
var clickResult = document.querySelector('#clickResult');
var easyButton = document.querySelector('#easyButton');
var hardButton = document.querySelector('#hardButton');
var colourBox = document.getElementsByClassName('colourBox');
var chosenColour = document.querySelector('#chosenColour');
var gameArea = document.querySelector('#gameArea');
var banner = document.querySelector('#banner');

var coloursArray = [];
var numSquares = 6;
var targetColour;
// var isGameOver = false;

makeColour = () => {
    var a = Math.floor(Math.random() * 257);
    var b = Math.floor(Math.random() * 257);
    var c = Math.floor(Math.random() * 257);
    
    return "rgb("+a+","+b+","+c+")";;
};

moreColours = () => {
    var array = new Array(numSquares);
    for (let i = 0 ; i < array.length ; i++) {
        array[i] = makeColour();        
    } 

    return array ;
};

chooseOneColour = ( array ) => {
    return array[Math.floor( Math.random() * (numSquares+1) )]
};

checkCorrectColour = (target , chosen) => {
    return target === chosen ;
}

reset = () => {
    coloursArray = moreColours();
    targetColour = chooseOneColour(coloursArray);
    chosenColour.innerHTML = targetColour;
    banner.classList.add("bg-primary");

    for (let i = 0 ; i < colourBox.length ; i++) {
        if (coloursArray[i]) {
            colourBox[i].style.display = "block";
        }else{
            colourBox[i].style.display = "none";
        }
    
        colourBox[i].style.backgroundColor = coloursArray[i];
        colourBox[i].setAttribute("colour" , coloursArray[i]);
    
        colourBox[i].addEventListener("click", function(){
            if(checkCorrectColour(targetColour , this.getAttribute("colour"))){
                clickResult.innerHTML = "Correct!!";
                playAgain.classList.remove("disabled");
                newColours.classList.add("disabled");
                for (let j = 0; j < colourBox.length ; j++) {
                    colourBox[j].classList.remove("bg-dark");
                    colourBox[j].style.backgroundColor = targetColour;
                    banner.classList.remove("bg-primary");
                    banner.style.backgroundColor = targetColour;                                 
                }
            }else{
                clickResult.innerHTML = "Wrong!!";
                this.classList.add("bg-dark");
            }
            
        });    
    };
}

easyButton.addEventListener("click" , function(){    
    numSquares = 3;
    easyButton.classList.add("active");
    hardButton.classList.remove("active");
    reset();
});

hardButton.addEventListener("click" , function(){
    numSquares = 6;
    easyButton.classList.remove("active");
    hardButton.classList.add("active");
    reset();
});  

playAgain.addEventListener("click" , function(){
    clickResult.innerHTML = "";
    // isGameOver = false;
    playAgain.classList.add("disabled");
    newColours.classList.remove("disabled");
    reset();
});  

newColours.addEventListener("click" , function(){
    reset();
});  















