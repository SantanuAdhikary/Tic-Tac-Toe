let buttons = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let newGame = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


  
  let resetGame = ()=>{
    turn0 = true
    enableBox()
    msgContainer.classList.add("hide")
  }

  let disableBox = ()=>{

    for(let box of buttons)
        {
            box.disabled = true
        }
  }
  let enableBox = ()=>{

    for(let box of buttons)
        {
            box.disabled = false
            box.innerText = ""
        }
  }

  let displayWinner =(winner)=>{
      msg.innerText = `congratulation the winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBox();
  }

  let checkWinner = ()=>{
    for(let pattern of winPatterns)
        {
            let pos1val = buttons[pattern[0]].innerText
            let pos2val = buttons[pattern[1]].innerText
            let pos3val =buttons[pattern[2]].innerText

          if(pos1val!= "" && pos2val!="" && pos3val!="")
            {
                if(pos1val === pos2val && pos2val === pos3val)
                    {
                        displayWinner(pos1val)
                        // console.log("winner",pos1val)
                    }
            }
        }
  }

      buttons.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(turn0)
                {
                    box.innerText = "0"
                    turn0 = false
                }
            else{
                box.innerText = "X"
                turn0 = true
            }
            box.disabled = true;
            checkWinner();
       
        })
      })



      reset.addEventListener("click", resetGame)
      newGame.addEventListener("click", resetGame)
