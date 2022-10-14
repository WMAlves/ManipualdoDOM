

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle=document.querySelectorAll(".controle-ajuste")  //seleciona todos os elementos que possuem a classe controle ajuste 

controle.forEach( (elemento) => { 
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.textContent)
    })
})
 
function manipulaDados(operacao){ 
    if (operacao=="-"){
        braco.value=parseInt(braco.value)-1
    }else{
        braco.value=parseInt(braco.value)+1
    }

}

// é necessário melhorar o código pois ele está somando apenas para o braço, as outra partes do robo não estão sendo somadas as peças. 

// proxima aula https://cursos.alura.com.br/course/javascript-manipulando-dom/task/106402
// 3/5 para saber mais: para que server um array.