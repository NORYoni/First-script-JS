/*var n1 = 8 
var n2 = 10
var n3 = 9



window.alert(n1<n2)

console.log(typeof(n1))

function inicio() {
    let nome = window.prompt('Qual é o teu nome?')
    window.alert (`Olá, ${nome} É um desprazer te conhecer`)
}

function moveon(){
    var answer = confirm("Ready to move on?")
    if(answer) window.location = "http://google.com"
}*/
//ALGUMAS COISAS NÃO FUNCIONAM PQ SIMPLESMENTE PRECISAM DE CRASE VAI TOMA NO CU JS

/* Operadores Logicos
    + Mais
    - Menos
    * Multipliccaçaõ
    / divisão
    == igualdade
    != desigualdade
    < Menor que
    > Maior que
    <= Menor ou igual que
    >= Maior ou igual que
    ** Potenciação
    === identidade: usado para comparar valor e string

    Auto Atribuição
    Exemplo
    var n = 3
    n = n + 4
    n = n - 5
    n = n * 4
    n = n / 2
    n = n ** 2
    n = n % 5

    Simplificão de Auto Atribuição
    n += 4
    n -= 5
    n *= 4
    n /= 2
    n **= 2
    n %= 5

    Incrementos
    n++
    n--

    operadores logicos

    ! negaçaõ
    && conjução
    || disjunção


*/
function inicio(){
    var not1 = window.prompt('Qual foi sua nota no primeiro Bi?')
    var not2 = window.prompt('Qual foi sua nota no segundo Bi?')
    var not3 = window.prompt('Qual foi sua nota no terceiro Bi?')
    var not4 = window.prompt('Qual foi sua nota no quarto Bi?')

nota = (not1 + not2 + not3 + not4) /4

window.alert(nota >= 7 ? "Aprovado" : "reprovado")
}