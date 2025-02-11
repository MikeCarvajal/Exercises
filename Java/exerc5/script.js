const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
    // console.log("original string: ",str); Para hacer prueba
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

// console.log(cleanInputString("+-99")); Para ver resultado de la prueba

function isInvalidInput(str){
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// console.log(isInvalidInput("1e3")); Test para ver resultados de la funcion
// console.log(entryDropdown.value) Para ver resultado de la vriable

function addEntry(){
    // const targetId = '#' + entryDropdown.value; no se necesita
    // const targetInputContainer = document.querySelector(`${targetId}  .input-container`); ya q tenemos metodo ${}
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name>Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    <label for="${entryDropdown.value}-${entryNumber}-calories" >Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
    `;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

addEntryButton.addEventListener("click", addEntry);

function getCaloriesFromInputs (list){
    let calories = 0;
    for(const item of list){
        const currVal = item.value; 
    }
}