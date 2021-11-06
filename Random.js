function random_num(){
    var N=parseInt((document.getElementById("num")).value);
    if(N<=1){
        alert("Please select a number which is strictly greater than 1."); 
        return; 
    }
    var n=Math.floor(Math.random()*N)+1;
    var chances=Math.floor(Math.sqrt(N));
    var count=0;
    while(true){
        ++count;
        if(count<=chances){
            guess=parseInt(prompt("Enter the number you guessed : "));
            if(guess<n){
                alert("Too low. Try again...\nChances remaining : "+(chances-count));
            }
            else if(guess>n){
                alert("Too high. Try again...\nChances remaining : "+(chances-count));
            }
            else{
                document.write('<h1 align="center" style="color: blue;padding-top: 5%;">Congratulations...! You won.</h1>');
                break;
            }
        }
        else{
            document.write('<h1 align="center" style="color: blue;padding-top: 5%;">Oops...! You lose the game.</h1><br>');
            document.write('<h2 align="center" style="color: orange;">The correct number is '+n+'.</h2>');
            break;
        }
    }
}
