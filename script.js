function changeText() {
    const dynamicTextElement = document.getElementById('dynamicText');
    dynamicTextElement.textContent = 'The text has been dynamically changed!';
}
function changeStyle() {
    const styleButton = document.getElementById('styleButton');
    styleButton.style.backgroundColor = 'green';
    styleButton.style.color = 'white';
    styleButton.style.padding = '15px 20px';
}
function addElement() {
    const container = document.getElementById('elementContainer');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a newly added paragraph.';
    container.appendChild(newParagraph);
}
function removeElement() {
    const container = document.getElementById('elementContainer');
    if (container.children.length > 1) { 
        container.removeChild(container.lastElementChild);
    } else {
        alert('No more elements to remove!');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const styleButton = document.getElementById('styleButton');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');
    const dynamicTextElement = document.getElementById('dynamicText');

    setTimeout(changeText, 2000);

    styleButton.addEventListener('click', changeStyle);
    addElementButton.addEventListener('click', addElement);
    removeElementButton.addEventListener('click', removeElement);
});