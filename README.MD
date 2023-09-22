⚠️ Este é um projeto de cunho educacional, desenvolvido para o <a href="https://7daysofcode.io/">**7 Days of Code da Alura**</a>  pela instrutora <a href="https://github.com/laisfrigerio"> Lais Frigério </a>.

# 7 Days of Code - Alura: JavaScript e DOM
<hr>

## Objetivo
<hr>
Construir sua versão do jogo Wordle. O Wordle é um jogo de palavras em que o objetivo é adivinhar a palavra escondida. A palavra tem 5 letras e você pode fazer até 6 palpites.

## Desafio
<hr>
Construir esta aplicação utilizando HTML, CSS e JavaScript puro a partir do <a href="https://www.figma.com/file/bKKIv0BSdVrzlMG79phJop/7DaysofCode---Wordle?type=design&node-id=0%3A1&mode=design&t=IuS9uLemzSCa83T1-1">Figma</a> disponibilizado.  
<img align="right" src="./src/assets/images/solved.gif" width="300" alt="Gif do Homer Simpson comemorando ter solucionado o wordle.">

**Tecnologias**
- HTML
- CSS
- JavaScript
- Jest

### Dia 1
<hr>
Dar o início ao desenvolvimento do seu jogo: construir a sua página com base no layout proposto. 

<br>

**Objetivo**
<br>
Criar a estrutura HTML da página e aplicar os estilos de CSS.

### Dia 2
<hr>
Dar início ao desenvolvimento de funcionalidades usando JavaScript. Além do mais, escrever testes automatizados com o objetivo de deixar o seu projeto com uma alta cobertura de testes.

<br>

**Objetivo**
<br>
- Criar a função responsável por escolher randomicamente a palavra que será adivinhada no jogo.
- Escrever testes de unidade para esta função, utilizando Jest e criando mocks.

**OBS:**
<br>
Tentei utilizar a lib <a href="https://www.npmjs.com/package/random-words">RANDON-WORDS</a>, entretanto não consegui utilizá-lo num projeto js puro. Assim, criei uma lista por meio de um arquivo JSON utilizando a listagem de palavras existente nessa biblioteca. 

### Dia 3
<hr>
Começar a tornar a sua página mais dinâmica e interativa: você vai desenvolver toda a lógica para realizar palpites.

<br>

**Objetivo**
<br>
Desenvolver a lógica considerando as seguintes regras:
- O usuário pode pressionar apenas:
Teclas de A-Z
E as teclas de Enter e Backspace/Delete
- Somente pode validar o palpite, se:
O palpite estiver completo (com 5 letras)
A palavra existir no banco de palavras
- Lembrar do máximo de 5 letras por palpite
- Lembrar que o jogador vai poder fazer até 6 palpites
- O usuário pode apagar a(s) letra(s) de um palpite enquanto não pressiona a tecla Enter