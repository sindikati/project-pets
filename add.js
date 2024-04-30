

const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('title');
const imgInput = document.getElementById('image');
const descriptionInput = document.getElementById('description');
const contactPersonNameInput = document.getElementById('contactPersonName');
const contactPersonNumberInput= document.getElementById('contactPersonNumber');





const statements = JSON.parse(localStorage.getItem('statements'));


addBtn.addEventListener('click', () =>{
    
    const newStatement = new Statement(titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imgInput.value)
    statements.push(newStatement);
    console.log(newStatement);
    localStorage.setItem('statements', JSON.stringify(statements));
});



