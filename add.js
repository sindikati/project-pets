

const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('title');
const imgInput = document.getElementById('image');
const descriptionInput = document.getElementById('description');
const contactPersonNameInput = document.getElementById('contactPersonName');
const contactPersonNumberInput = document.getElementById('contactPersonNumber');





const statements = JSON.parse(localStorage.getItem('statements'));
// const statements = [];



addBtn.addEventListener('click', () => {
    if (titleInput.value === '', imgInput.value === '', descriptionInput.value === '', contactPersonNameInput.value === '', contactPersonNumberInput.value === '') {
        alert('Please, fill all infromation');
        return
    };

    const newStatement = new Statement(titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, null, descriptionInput.value, null, null, imgInput.value)
    statements.push(newStatement);
    localStorage.setItem('statements', JSON.stringify(statements));
    window.location.href = 'index.html';


});



