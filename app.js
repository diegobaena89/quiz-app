const form = document.querySelector('form')
const showResult = document.querySelector('.result')
let spanResult = showResult.querySelector('span')

const correctQuizAnswers = ['A', 'B', 'D', 'A']
const comparingQuestions = event => {
  //previne evento padrão do submit
  event.preventDefault()

  //pegar o valor inserido nos iputs pelo usuario
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  //sobe a página para o topo
  scrollTo(0, 0,)

  //contador de pontos
  let counterScore = 0

  //testar se respostas do usuario conferem com array de respostas certas
  //itera sobre cada resposta
const checkingAnswers = (userAnswer, i) => {
  if(userAnswer === correctQuizAnswers[i]) {
    counterScore += 25
  }
}

  userAnswers.forEach(checkingAnswers)
  //remove classe de 'display: none' da div de pontuação
  showResult.classList.remove('d-none')
  //mostra o resultado acima do form
  // spanResult.textContent = `${counterScore}%`

  //mostrar contador de pontos
  let displayCounter = 0

  const timer = setInterval(() => {
    //condição de parada do contador
    const sameNumbers = displayCounter === counterScore
    if(sameNumbers) {
      //se o contador chega na pontuação, setInterval pára.
      clearInterval(timer);
    }
    //mostra resultado na div
    spanResult.textContent = `${displayCounter}%`
    //incrementa o valor o contador
    displayCounter++
  }, 10)
}

form.addEventListener('submit', comparingQuestions)


/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

