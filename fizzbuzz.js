function main(){
    let userInput = Number(prompt("Enter a number that's greater than 10"));
    if(userInput > 10){
        fizzBuzz(userInput);
    } else {
        console.log("Error number was less than 10");
    }
}
function fizzBuzz(input){
    for(let i = 0; i <= input; i++){
        if((i % 3 == 0) && (i % 5 == 0) ){
            console.log("Fizz Buzz");
        } else if (i % 5 == 0){
            console.log("Buzz");
        } else if (i % 3 == 0){
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }

}

main();
