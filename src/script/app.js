const teclas = document.querySelectorAll('.letter-btn'); //selecionando os botões do teclado virtual
const letra = document.querySelector('.letter'); //selecionando os espaços de letras das tentativas

//CONFIGURAÇÕES DO JOGO
const boardGame = {
  bd: [],
  currentAttempt: 1,
  currentLetter: 1,
  currentGuess: '',
  rightGuess: ''
}

const maxAttempts = 6;
const maxLetters = 5;

//MENSAGENS

//MENSAGENS PARA DEVS
const maxLetterMsg = 'Max of letters per word reached';
const maxAttemptMsg = 'Max of Attempts reached';
const invalidKeyMsg = 'Invalid Key pressed';
const enterKeyMsg = 'Enter key pressed';
const eraserKeyMsg = 'Backspace or Delete key pressed';
const cantEraseMsg = 'Can not erase an empty guess';

//MENSAGENS PARA PLAYERS
const emptyGuessMsg = 'Empty Guess';
const incompleteGuessMsg = 'Incomplete Guess';
const wordNotInDbMsg = 'Word not valid, not in database';
const rightGuessMsg = "Congratulations! You guessed";

//FUNÇÕES PARA BUSCAR UMA PALAVRA ALEATÓRIA NO BD:

//FUNÇÃO PARA CARREGAR BD
async function loadBd() {
  try {
    const words = await fetch('./src/db.json') //salvando em uma constante o objeto "words" do banco de dados
      .then((res) => res.json()) //a resposta do fecth deve ser convertido em json
      .then(({ words }) => words); //extraindo do objeto o array

    const validWords = await words.filter((word) => word.length == 5); //selecionando do bd apenas as palavras de exatamente 5 caracteres 
    console.log(validWords)
    return validWords
  } catch (error) { //contraparte do try, capturando possíveis erros
    console.log(error)
  }
}

//FUNÇÃO PARA SELECIONAR UMA PALAVRA ALEATORIAMENTE
async function selectRandomWord() { //função assincrona
  try {
    const validWords = await loadBd();
    const totalLength = validWords.length + 1; //formula para automatizar a formula random caso aumente o banco de dados 

    const index = Math.floor(Math.random(validWords) * totalLength); //formula para gerar o indice randomicamente para selecionar a palavra no array
    console.log(index)

    const word = validWords[index]; //busca da palavra aleatória armazenada em uma constante
    console.log(word);
    return word; //retorno da função
  } catch (error) { //contraparte do try, capturando possíveis erros
    console.log(error)
  }
}

//console.log(await selectRandomWord());

//FUNÇÕES SIMPLES

//NOMES DAS TECLAS
const enter = 'ENTER';
const eraser = ['DELETE', 'BACKSPACE'];
const alphabetic = (keyName) => /[A-Za-z]/.exec(keyName);

//VALIDAR TECLA
const validKey = (keyName) => {
  const key = keyName;
  if (enter == key || eraser.includes(key) || alphabetic(key) == key) {
    return key;
  }
}

//QUAL TECLA ESTÁ SENDO PRESSIONADA
const enterKeyPressed = (key) => {
  if (key == enter) {
    console.log(enterKeyMsg)
  }
}

const eraserKeyPressed = (key) => {
  if (eraser.includes(key)) {
    console.log(eraserKeyMsg)
  }
}

const alphabeticKeyPressed = (key) => {
  if (key == alphabetic(key)) {
    console.log(key)
  }
}

function onKeyDown(pressedKey, match) {
  const { currentAttempt, currentLetter } = match

  const keyName = pressedKey.toUpperCase(); //identificando o nome da tecla
  const key = validKey(keyName);
  if (key) {
    enterKeyPressed(key);
    eraserKeyPressed(key);
    alphabeticKeyPressed(key);
  } else {
    throw new Error(invalidKeyMsg);
  }

  sendALetter(match, pressedKey)
}

//IDENTIFICANDO QUAL TECLA VIRTUAL ESTÁ SENDO CLICADA:
function onVirtualKeyboardClick() {
  teclas.forEach((tecla) => {
    const letter = tecla.textContent.toUpperCase(); //identificando qual
    tecla.addEventListener('click', () => {
      console.log(letter)
    })
  }
  )
}


//IDENTIFICANDO QUAL TECLA DO TECLADO ESTÁ SENDO CLICADA: 


//PEGAR POSIÇÃO DAS LETRAS
const getLetterPosition = () => {
  document.querySelector(`#board .attempt-${currentAttempt} .letter-${currentLetter}`);
}
//APARECER LETRA NA TELA



//CARREGAR JOGO
window.onload = async () => {
  const database = await loadBd();
  const wordToGuess = await selectRandomWord();

  const match = { ...boardGame };
  match.bd = database;
  match.rightGuess = wordToGuess;
  console.log(match)

  document.addEventListener('keydown', (event) => onKeyDown(event.key))
  onVirtualKeyboardClick()
  
}
