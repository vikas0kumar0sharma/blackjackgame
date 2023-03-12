let firstcard=14
let secondcard=6
let sum=firstcard+secondcard
let cardarr=[firstcard,secondcard]
let cardel=document.querySelector("#card-el")
let msgel=document.getElementById("message-el")
let message=""
let sumel=document.getElementById("sum-el")

function startgame(){
  rendergame()
}

function rendergame(){
  if(sum<=20){
    message="Do you want to draw a new Card?"
  }
  else if(sum==21){
    message="You have got a blackjack!"
  }
  else{
    message="You are out of game"
  }
msgel.innerHTML=message
sumel.innerHTML="Sum:"+sum

let updatedcard="Cards:"
for(let i=0;i<cardarr.length;i++){
  updatedcard+=cardarr[i]+" "
}
cardel.innerHTML=updatedcard
}

function newcard(){
let card=Math.floor(Math.random()*13)+1
if(card==1) card=10
else if(card==11) card=10
else if(card==12) card=10
else if(card==13) card=10
sum+=card

cardarr.push(card)
rendergame()  
}