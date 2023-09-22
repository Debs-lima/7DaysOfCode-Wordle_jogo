const teclas = document.querySelectorAll('.letter-btn');

async function selectRandomWord() {
  try {
    const words = await fetch('./src/db.json')
      .then((res) => res.json())
      .then(({ words }) => words)

    const validWords = await words.filter((word) => word.length == 5);
    console.log(validWords)
    const totalLength = validWords.length + 1;

    const index = Math.floor(Math.random(validWords) * totalLength);
    console.log(index)

    const word = validWords[index];
    return word
  } catch(error) {
    console.log(error)
  }
}

console.log(await selectRandomWord());

teclas.forEach( (tecla) => {
  const text = tecla.textContent
  tecla.addEventListener('click', () => {
    console.log(text)
  })
}
)

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log(keyName)
})
