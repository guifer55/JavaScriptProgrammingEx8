/*create a function click handler */
/*Function Declaration??? */
function clickHandler() {
    const inputVariable = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');
    target.innerHTML = inputVariable.value;
}

/*this second way is a better way to do it than the first above */

const button = document.getElementById('clickMe');
button.addEventListener('click', clickHandler);

const myCheckbox = document.getElementById('myCheckbox');
myCheckbox.addEventListener('change', showCheckboxState);

const myCheckbox2 = document.getElementById('myCheckbox2');
myCheckbox2.addEventListener('change', showCheckboxState);

function showCheckboxState(event) {
    console.log(event);
    const target = document.getElementById('checkboxState');
    target.innerHTML = event.target.checked;
}



const vehicleMakes = document.getElementById('vehicleMakes');

/*Function Expression */
const vehicleMakeChange = function() {
    const index = vehicleMakes.selectedIndex;
    console.log(index);
    const option = vehicleMakes.selectedOptions[0];
    console.log(option);
    const targetElm = document.getElementById('selectedMake');

    if(index <= 0) {
        targetElm.innerHTML = 'Please select a make';
    } else {
        targetElm.innerHTML = `You selected Make: ${option.text} Id: ${option.value} Index: ${index}.`;
    }
}

vehicleMakes.addEventListener('change', vehicleMakeChange);



const vehicleModels = document.getElementById('vehicleModels');

const vehicleModelChange = function() {
    const index = vehicleModels.selectedIndex;
    console.log(index);
    const option = vehicleModels.selectedOptions[0];
    console.log(option);
    const targetElm = document.getElementById('selectedModel');

    if(index <= 0) {
        targetElm.innerHTML = 'Please select a model';
    } else {
        targetElm.innerHTML = `You selected Model: ${option.text} Id: ${option.value} Index: ${index}.`;
    }
}

vehicleModels.addEventListener('change', vehicleModelChange);