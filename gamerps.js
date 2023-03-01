const choices=["rock","paper","scissors"];
let count_com=0
let count_user=0
let count_tie=0

function GetcomputerChoice(){
    com_choice=choices[Math.floor(Math.random()*choices.length)];
    return(com_choice);
}

function userinput(){

    user_input=prompt("choose r,p or s").toLowerCase();
    while(!choices.includes(user_input)){
        user_input=prompt("choose r,p or s").toLowerCase();
    }
    return(user_input);
}
function gameround(com,user){
    console.log(com,user);
    if(com == "rock" && user=="scissors"){
        
        count_com=count_com+1;
    }
    else if(com == "scissors" && user=="paper"){
        
        count_com=count_com+1;
    }
    else if(com == "paper" && user=="rock"){
        count_com=count_com+1;
    }
    else if(com==user){
        count_tie=count_tie+1;
    }
    else{
        
        count_user=count_user+1;
}
}
function game(){
    for(let i=0;i<5;i=i+1){
        let com=GetcomputerChoice();
        let user=userinput();
        gameround(com,user);
    }
    if(count_com>count_user){
        console.log("com wins");
    }
    else if(count_com<count_user){
        console.log("user wins");
    }
    else{
        console.log("it's a tie");
    }
    
    repeat=prompt("want to repeat: y or n")
    while(repeat=='y'){
        game()
    }
        
    
}


game()