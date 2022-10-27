const controle = document.querySelectorAll("[data-controle]")  //seleciona todos os elementos que possuem a classe controle ajuste 

controle.forEach( (elemento) => { 
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
     
    })
})
 
function manipulaDados(operacao, controle){ 

    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-"){
        peca.value = parseInt(peca.value)-1
    }else{
        peca.value = parseInt(peca.value)+1
    }

}


//<<<<<<<<<ATEN��O>>>>>>>>>
// FA�A O DESAFIO PROPOSTO NA AULA
//https://cursos.alura.com.br/course/javascript-manipulando-dom/task/106409
