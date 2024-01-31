function cu(){
    let nome = document.querySelector('#name')
    let senha = document.querySelector('#senha')
    let res = document.querySelector('#resposta')
    if (nome.value.length==0 || senha.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente!'
        res.style.color='red'
    } else{
        
    }
}