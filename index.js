const perguntas = [
  {
    pergunta: "Quem foi o primeiro homem criado por Deus?",
    respostas: [
      "Adão",
      "Moisés",
      "Abraão"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o livro que conta a história do Dilúvio?",
    respostas: [
      "Gênesis",
      "Êxodo",
      "Deuteronômio"
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o profeta que enfrentou os profetas de Baal no Monte Carmelo?",
    respostas: [
      "Elias",
      "Isaías",
      "Jeremias"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o rei que construiu o Templo de Jerusalém?",
    respostas: [
      "Salomão",
      "Davi",
      "Josafá"
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos discípulos negou Jesus três vezes antes do galo cantar?",
    respostas: [
      "Pedro",
      "André",
      "João"
    ],
    correta: 0
  },
  {
    pergunta: "Qual foi o sinal que Deus deu a Noé como aliança após o Dilúvio?",
    respostas: [
      "O arco-íris",
      "A estrela de Davi",
      "A vara de Aarão"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o profeta que foi engolido por um grande peixe?",
    respostas: [
      "Jonas",
      "Isaías",
      "Jeremias"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o rei que escreveu muitos dos Salmos na Bíblia?",
    respostas: [
      "Davi",
      "Salomão",
      "Ezequias"
    ],
    correta: 1
  },
  {
    pergunta: "Quantos livros existem no Novo Testamento?",
    respostas: [
      "27",
      "39",
      "66"
    ],
    correta: 2
  },
  {
    pergunta: "Qual foi o profeta que teve sua mensagem escrita em uma parede durante um banquete?",
    respostas: [
      "Daniel",
      "Ezequiel",
      "Oséias"
    ],
    correta: 0
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }