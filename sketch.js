var inputTag = document.querySelector('input');
var textTag = document.querySelector('p');

function changeText() {
    var getInputText = inputTag.value;
    textTag.innerHTML = getInputText.toUpperCase();
}

inputTag.addEventListener("blur", function (event) {
    textTag.innerHTML = "";
    inputTag.value = "";
});