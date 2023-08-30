// modell
let color = "____";
let animal = "____";
let adjective = "____";
let story;

// view
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>Adjektivhistorie</h1>
    <div id="story">
    Once upon a time there was a <u>${color}</u> <u>${animal}</u>, who was very <u>${adjective}</u>.
    </div> <br/>
    <div id="allButtons">
        <div onclick="addToText('red', '${animal}', '${adjective}')">Red</div>
        <div onclick="addToText('blue', '${animal}', '${adjective}')">Blue</div>
        <div onclick="addToText('${color}', 'giraffe', '${adjective}')">Giraffe</div>
        <div onclick="addToText('${color}', 'monkey', '${adjective}')">Monkey</div>
        <div onclick="addToText('${color}', '${animal}', 'large')">Large</div>
        <div onclick="addToText('${color}', '${animal}', 'round')">Round</div>
    </div> <br/>
    <button onclick="backToStart()">Reset</button>
    `;
}
// console
function addToText(changeColor, changeAnimal, changeAdjective){
    color = changeColor;
    animal = changeAnimal;
    adjective = changeAdjective;
    updateView();
}
function backToStart(){
    color = "____";
    animal = "____";
    adjective = "____";
    updateView();
}