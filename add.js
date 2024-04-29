

const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('title');
const imgInput = document.getElementById('image');
const descriptionInput = document.getElementById('description');
const contactPersonNameInput = document.getElementById('contactPersonName');
const contactPersonNumberInput= document.getElementById('contactPersonNumber');

addBtn.addEventListener('click', () =>{
    
    const statement = new Statement(titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imgInput.value)
    console.log(statement);

});



