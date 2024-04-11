// ATIVIDADE 1

// let sorvete = []
// let sabor = []
// let selfService = ''
// console.log("Rodando")
// while(selfService != '4'){
//     selfService = prompt( `======= MENU =======
//     1- Adicionar sabor
//     2- Remover sabor
//     3- Visualizar sorvete
//     4- Finalizar pedido`)
    
// switch(selfService){
//     case '1':
//            if(sabor.length < 3){
//              sabor.push(prompt("Escolha um sabor que deseje adicionar: "))
//            }else{
//             alert("Limite de sabores atigindo!")
//            }
//            break
            
//         case '2':
//              if(sabor.pop(prompt("Remova um sabor: "))){
//                 alert("Sabor removido!")
//              }
//             break
            
//         case '3':
//         alert(sabor)
//         break

//         case '4':
//          break

        

//         }
//     }


//ATIVIDADE 2

// let numero = []

// for(let i=0; i < 3; i++){
//     numero.push(Number(prompt("Digite um número")))
// }
// numero.reverse()
// alert(numero)

//ATIVIDADE 3

// let numeros = [1, 100, 456, 12, 89]
// let somaDosNumeros = 0;

// for(let i=0; i < numeros.length; i++){
//     somaDosNumeros += numeros[i];
// }

// alert(somaDosNumeros)

//ATIVIDADE 4

// let nomes = []
// let notas = []

// for(let i = 1; i<= 5; i++){
//     nomes.push(prompt("Digite o nome do aluno: " + i))
//     notas.push(Number(prompt("Digite a nota do aluno: " + i)))
// }
// let somaNotas = 0
// let contagemDeNotas = 0

// for(let  i = 0; i <notas.length; i++){
//     if(notas[i] > 5){
//         somaNotas += notas[i]
//         contagemDeNotas++
//     }
// }
// let media = (somaNotas/contagemDeNotas).toFixed(2);
// alert("A media das notas acima de 5 é: " + media)


//ATIVIDADE 5

// let valor = [2345, 898769, 909090, 6547379, 666]

// let maior = 0
// let indiceMaior
// for(let i = 0; i < valor.length; i++){
//     if(valor[i] > maior){
//         maior = valor[i]
//         indiceMaior = i
//     }
// }
// alert(valor[indiceMaior])

//ATIVIDADE 6

// let grupo1 = []
// for(let i = 0; i < 10; i++){
//     grupo1.push(prompt("Digite um número: "))
// }
// let grupo2= []
// for (let i = 0; i < grupo1.length; i++){
//     if(grupo1[i] % 2 != 0){
//         grupo2.push(grupo1[i])
//     }
// }
// alert(grupo2)