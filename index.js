

const petList = document.querySelector('.pet-list');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


const statement1 = new Statement('ჩუქდება თეთრი კნუტი 1 თვის','ლუკა','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');
const statement2 = new Statement('იყიდება თეთრი კნუტი 1 თვის','ცოტნე','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');
const statement3 = new Statement('ჩუქდება შავი კნუტი 1 თვის','ცოტნე','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');
const statement4 = new Statement('იყიდება შავი კნუტი 1 თვის','ცოტნე','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');
const statement5 = new Statement('ჩუქდება შავი კნუტი 1 თვის','ცოტნე','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');
const statement6 = new Statement('იყიდება შავი კნუტი 1 თვის','ცოტნე','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');


const statementArray = [statement1,statement2,statement3,statement4,statement5,statement6];

const appendStatement = (statement) =>{
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


const appendAllStatements = (statements) =>{
    for (const statement of statements){
        appendStatement(statement);
    }
};



searchBtn.addEventListener('click', ()=>{
    petList.innerHTML = '';

    if(searchInput.value === ""){
        appendAllStatements(statementArray);
        return;
    }

    const filteredArray = statementArray.filter((statement)=>{
        if (statement.title.includes(searchInput.value)) {
            return true;
        } else {
            return false;
        }
    });

    appendAllStatements(filteredArray);
});


appendAllStatements(statementArray);