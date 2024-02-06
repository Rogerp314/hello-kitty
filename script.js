let nome = document.querySelector('#name')
let senha = document.querySelector('#senha')
let res = document.querySelector('#resposta')
let dados = {Nome: nome}

function cu(){
    res.innerHTML=`${nome.value}`
}