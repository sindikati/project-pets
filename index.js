

const petList = document.querySelector('.pet-list');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


const statementsAsString = localStorage.getItem('statements');
const statementsAsArray = JSON.parse(statementsAsString);


const appendStatement = (statement) => {
    const statementTemplate = `
        <div class="statement">
            <p class="statement-title">${statement.title}</p>
            <img class="statement-img" src=${statement.img} alt="" srcset="">
            <p class="description">${statement.description}</p>
            <p class="author-info">Contact Name : ${statement.contactPersonName}</p>
            <p class="author-info">Contact Number : ${statement.contactPersonNumber}</p>
        </div>`;
    petList.innerHTML += statementTemplate;
};


const appendAllStatements = (statements) => {
    for (const statement of statements) {
        appendStatement(statement);
    }
};


searchBtn.addEventListener('click', () => {
    petList.innerHTML = '';

    if (searchInput.value === "") {
        appendAllStatements(statementsAsArray);
        return;
    }

    const filteredArray = statementsAsArray.filter((statement) => {
        if (statement.title.includes(searchInput.value)) {
            return true;
        } else {
            return false;
        }
    });

    appendAllStatements(filteredArray);
});


appendAllStatements(statementsAsArray);