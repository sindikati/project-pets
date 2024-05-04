

const petList = document.querySelector('.pet-list');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


const statementsAsString = localStorage.getItem('statements');
const statementsAsArray = JSON.parse(statementsAsString);


let searchStatements = [];

// local host 
const getStatements = () => {

    $.ajax({
        method: "GET",
        url: "http://localhost:3000/statements",
    })
    .done(function (data) {
            searchStatements = data
            appendAllStatements(data);
    })
};

getStatements();

// statements
const appendStatement = (statement) => {
    const statementTemplate = `
        <div class="statement">
            <p class="statement-title">${statement.title}</p>
            <img class="statement-img" src=${statement.img} alt="" srcset="">
            <p class="statement-description">${statement.description}</p>
            <p class="statement-category">Category : ${statement.pet}</p>
            <p class="statement-address">Location : ${statement.address}</p>
            <p class="author-info">Contact Name : ${statement.contactPersonName}</p>
            <p class="author-info">Contact Number : ${statement.contactPersonNumber}</p>
            <p class="statement-price">Price : <span style="color:red">${statement.price} GEL</span></p>
        </div>`;
    petList.innerHTML += statementTemplate;
};


const appendAllStatements = (statements) => {
    for (const statement of statements) {
        appendStatement(statement);
    }
};



// search button 
searchBtn.addEventListener('click', () => {
    petList.innerHTML = '';

    if (searchInput.value === "") {
        appendAllStatements(searchStatements);
        return;
    }

    const filteredArray = searchStatements.filter((statement) => {
        if (statement.title.includes(searchInput.value)) {
            return true;
        } else {
            return false;
        }
    });

    appendAllStatements(filteredArray);
});

