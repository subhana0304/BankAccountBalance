function getValueByInputField(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    inputField.value = '';
    return inputFieldValue;
}
function getValueByBoxText(boxTextFieldID){
    const boxTextField = document.getElementById(boxTextFieldID);
    const boxTextValueString = boxTextField.innerText;
    const boxTextValue = parseFloat(boxTextValueString);
    
    return boxTextValue;
}

function getTextInBox(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

