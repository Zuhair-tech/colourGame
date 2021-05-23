var body = document.querySelector('#body');
var playAgain = document.querySelector('#playAgain');
var newColours = document.querySelector('#newColours');
var clickResult = document.querySelector('#clickResult');
var easyButton = document.querySelector('#easyButton');
var hardButton = document.querySelector('#hardButton');
var colourBox = document.getElementsByClassName('colourBox');
var chosenColour = document.querySelector('#chosenColour');
var gameArea = document.querySelector('#gameArea');

makeColour = () => {
    var a = Math.floor(Math.random() * 257);
    var b = Math.floor(Math.random() * 257);
    var c = Math.floor(Math.random() * 257);
    
    return "rgb("+a+","+b+","+c+")";;
};

moreColours = () => {
    var array = new Array(6);
    for (let i = 0 ; i < array.length ; i++) {
        array[i] = makeColour();        
    } 

    return array ;
};

chooseOneColour = ( array ) => {
    return array[Math.floor( Math.random() * 7 )]
};

checkCorrectColour = (target , chosen) => {
    return target === chosen ;
}

var coloursArray = moreColours();
var targetColour = chooseOneColour(coloursArray)
chosenColour.innerHTML = targetColour.toUpperCase();

for (let i = 0 ; i < colourBox.length ; i++) {
    colourBox[i].style.backgroundColor = coloursArray[i];
    colourBox[i].setAttribute("colour" , coloursArray[i])  ;

    colourBox[i].addEventListener("click", function(){
        if(checkCorrectColour(targetColour , this.getAttribute("colour"))){
            clickResult.innerHTML = "Correct!!";
            for (let j = 0; j < colourBox.length ; j++) {
                if( j == i){
                    continue;
                }
                colourBox[j].style.backgroundColor = targetColour;                
            }
        }else{
            clickResult.innerHTML = "Wrong!!";
            this.style.backgroundColor = "black";
        }
      
    });    
};












