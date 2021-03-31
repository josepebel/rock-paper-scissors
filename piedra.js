

let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");

paper.addEventListener("click", changeClassUser);
scissors.addEventListener("click", changeClassUser);
rock.addEventListener("click", changeClassUser);

let seletUser = document.getElementById("choise_user_id");

function changeClassUser(event) {
    
    if (event.target.className == "fas fa-hand-paper") {
        seletUser.className = '';
        seletUser.classList.add('fas');
        seletUser.classList.add('fa-hand-paper');
    } else if (event.target.className == "fas fa-hand-scissors"){
        seletUser.className = '';
        seletUser.classList.add('fas');
        seletUser.classList.add('fa-hand-scissors');
    } else if(event.target.className == "fas fa-hand-rock"){
        seletUser.className = '';
        seletUser.classList.add('fas');
        seletUser.classList.add('fa-hand-rock');
    }
}


paper.addEventListener("click", changeClassPC);
scissors.addEventListener("click", changeClassPC);
rock.addEventListener("click", changeClassPC);

let seletPc = document.getElementById("choise_pc_id");

function changeClassPC() {
    let numRandom = Math.floor(Math.random()*3) + 1;
    if (numRandom == 1) {
        seletPc.className = '';
        seletPc.classList.add('fas');
        seletPc.classList.add('fa-hand-paper');
    } else if (numRandom == 2){
        seletPc.className = '';
        seletPc.classList.add('fas');
        seletPc.classList.add('fa-hand-scissors');
    } else {
        seletPc.className = '';
        seletPc.classList.add('fas');
        seletPc.classList.add('fa-hand-rock');
    }
}


paper.addEventListener("click", result);
scissors.addEventListener("click", result);
rock.addEventListener("click", result);



//user
let userResult = document.getElementById('result_user');
let userCount = 0;

//pc
let pcResult = document.getElementById('result_pc');
let pcCount = 0;

let resultText = document.getElementById("resultado");

let classes = ["fas fa-hand-paper", "fas fa-hand-scissors", "fas fa-hand-rock"];

function result(){

    let selectionUser = seletUser.className;
    
    let selectionPc = seletPc.className;
    
    if(selectionUser === selectionPc){
        resultText.textContent = "Empate";
    } else if (selectionUser === classes[0] && selectionPc === classes[1]){
        pcCount++
        resultText.textContent = "Gana la máquina";
    } else if (selectionUser === classes[0] && selectionPc === classes[2]){
        userCount++
        resultText.textContent = "Gana el usuario";
    } else if (selectionUser === classes[1] && selectionPc === classes[0]){
        userCount++
        resultText.textContent = "Gana el usuario";
    } else if (selectionUser === classes[1] && selectionPc === classes[2]){
        pcCount++
        resultText.textContent = "Gana la máquina";
    } else if (selectionUser === classes[2] && selectionPc === classes[0]){
        pcCount++
        resultText.textContent = "Gana la máquina";
    } else if (selectionUser === classes[2] && selectionPc === classes[1]){
        userCount++
        resultText.textContent = "Gana el usuario";
    }
    pcResult.innerHTML = pcCount;
    userResult.innerHTML = userCount;
}

