

const petList = document.querySelector('.pet-list');


const statement1 = new Statement('ჩუქდება თეთრი კნუტი 1 თვის','ლუკა','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');
const statement2 = new Statement('ჩუქდება თეთრი კნუტი 1 თვის','ცოტნე','555555555','თბილისი','არის საყვარელი',null,0,'https://www.catster.com/wp-content/uploads/2023/12/White-British-Shorthair_OksanaSusoeva-Shutterstock-1024x683-1.jpg');

const statementArray = [statement1,statement2];

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

appendAllStatements(statementArray);
