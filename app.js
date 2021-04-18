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

