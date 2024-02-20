let nome = document.querySelector('#name')
let senha = document.querySelector('#senha')
let dados = {Nome: 'Gaby', Senha: 'euteamo!'}
let res = document.querySelector('#resposta')

function entrar(){
    res.style.color='black'
    if(nome.value.length==0 || senha.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente!'
        res.style.color='red'
        nome.focus()
    } else if(nome.value != dados.Nome || senha.value != dados.Senha){
        res.innerHTML='Nome ou senha incorrtos. Verifique-os'
        res.style.color='red'
        nome.value=''
        nome.focus()
        senha.value=''
    } else{
        return (chave())
    }
}
function chave(event){
    const pass = event.key
    pass=='Enter'
    if(nome.value==dados.Nome && senha.value==dados.Senha){
        return location.replace('conteudo.html')
    }
}