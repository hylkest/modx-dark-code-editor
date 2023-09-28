function changeEditorBackgroundColor() {
  // Check if the code editor element exists on the page
  const codeEditor = document.querySelector('.ace_content');

  if (codeEditor) {
    codeEditor.style.backgroundColor = '#2c3034';
  }
}

window.addEventListener('load', changeEditorBackgroundColor);


function test() {
  const codeEditor = document.querySelector('.ace_string'); 

  if (codeEditor) {
    codeEditor.style.color = 'red';
  }
}

window.addEventListener('load', test);

function changeTextColors() {
  // Find all elements with class
  const codeEditors = document.querySelectorAll('.ace_content');

  codeEditors.forEach(codeEditor => {
    // Get the computed style of the element
    const computedStyle = window.getComputedStyle(codeEditor);
    const textColor = computedStyle.color;

    if (textColor === 'rgb(0, 0, 0)') {
      codeEditor.style.color = '#579cd6';
    }

    else if (textColor === 'rgb(26,26,166)') {
      codeEditor.style.color = 'red';
    }

    else if (textColor === 'rgb(255, 255, 255)') {
      codeEditor.style.color = 'yellow';
    }
  });
}

window.addEventListener('load', changeTextColors);


function changeAceStringTextColorToRedImportant() {

  const nestedElements = document.querySelectorAll('.nested-class .ace_string');

  // Iterate through each matching element
  nestedElements.forEach(element => {
    // Change the text color to red with !important
    element.style.setProperty('color', 'red', 'important');
  });
}

window.addEventListener('load', () => {
  setTimeout(changeAceStringTextColorToRedImportant, 100); 
});
