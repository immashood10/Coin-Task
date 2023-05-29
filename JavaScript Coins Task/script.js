alert("Choose your Bet \nHeads OR Tails");
function Heads() {  
    let coinFlip = Math.ceil(Math.random() * 2);
    if (coinFlip === 1) {
        console.log("Heads!");
        myImage.src = "images/heads.jpg";
        alert("Congrats! \nYou have Won the Toss");       
    }
    else{
        console.log("Tails!");
        myImage.src = "images/tails.jpg";
        alert("Sorry \nYou Lose the Toss");
    } 
}
function clickImg(){
    myImage.src = "images/heads.jpg";
}