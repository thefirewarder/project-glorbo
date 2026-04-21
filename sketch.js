const rInput = document.getElementById("rInput")
const cBoard = document.getElementById("cBoard")
rInput.addEventListener("change",updateCutoff,false)
let cutoff = null
function updateCutoff(){
  const round = parseInt(rInput.value)
  let cutoffBase = null
  switch(round % 3){
    case 1:
    if(round === 1){
      cutoff = "L"
    }
    else{
      cutoff = ((Math.floor(round/3))+1)+"L"
    }
    break
    case 2:
    if(round === 2){
    cutoff = "W - 2"
    }
    else{
      cutoff = ((Math.floor(round / 3))+1)+"W - 2"
    }
    break
    default:
    if(round === 3){
    cutoff = "2D"
    }
    else{
      cutoff = ((round/3)+1)+"D"
    }
    break
  }
  cBoard.innerHTML = "("+cutoff+")"
}
updateCutoff()