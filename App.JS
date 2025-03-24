let userScore=0
let compScore=0

let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#msg")
let userScorePara=document.querySelector("#user_score")
let compScorePara=document.querySelector("#computer_score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    // this can generate random numbers and math.floor removes all the decimal valus.
    const randomIndx=Math.floor(Math.random()*3)
    return options[randomIndx]
}

const drawGame=()=>{
    msg.innerText="Its a Draw."   
    console.log("Its a draw")
    // Change the background color
    document.querySelector(".msg_container").style.backgroundColor="#081b31"
}


// for checking later
const showWinner = (userWin) =>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        
        msg.innerText="You Win."
        // Change the background color
        document.querySelector(".msg_container").style.backgroundColor="green"
    }
    else{
        
        compScore++
        compScorePara.innerText=compScore
        msg.innerText="You Lose."
        // Change the background color
        document.querySelector(".msg_container").style.backgroundColor="red"
    }
}


const playGame=(userChoice)=>{
    
    console.log("userChoice =",userChoice)
    //computer choice
    const compChoice=genCompChoice();
    console.log("compChoice =",compChoice)

    // check for draw 
    if(userChoice===compChoice){        
        msg.innerText="Its a draw"
        // Calling drawGame function.
        drawGame() 

    }  
    else{
        let userWin=true

        if(userChoice==="rock")
        {
            // paper,scissors
            userWin=compChoice==="paper"? true: false
        }
        else if(userChoice==="paper")
        {
            // paper,rock
            userWin=compChoice==="scissors"? true: false
        }

        else
        {   
            
            userWin=compChoice==="rock"? true:false
        }
       
        showWinner(userWin)
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        
        // calling user choice
        playGame(userChoice) 
        
    })
})


