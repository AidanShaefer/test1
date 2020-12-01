document.getElementById("btnGetScore").addEventListener('click',function(){
    //Here I get the users selected par and inputed score
    let userPar = document.getElementById('cboPar').value;
    let userScore = document.getElementById('txtScore').value;
    //I parser the inputs as floats so they can be used later on in my function
    let par = parseFloat(userPar);
    let score = parseFloat(userScore);
    
    //In this if else statement if users score is not a number or not in the range of 1-10 it goes to an error message
    if (isNaN(score) || score < 1 || score > 10){
        alert("Please enter a number from 1 to 10.");
    } else {
        //If it passes that statement its a valid number and I use my function to output their score    
        alert(`Your rating for this hole is a: ${parCheck(score, par)}`);
    }
});

//This function compares the par to the score and returns a rating based on the result
function parCheck(s, p){
    if (s === 1){
        return('Hole in One!')
    } else if ((p-3) === s){
        return('Albatross')      
    } else if ((p-2) === s){
        return('Eagle');
    } else if ((p-1) === s){
        return('Birdie');
    } else if (p === s){
        return('Par');
    } else if ((p + 1) === s){
        return('Bogie');
    } else {
        return('Take some Golf Lessons');
    }    
}