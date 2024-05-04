

const addBtn = document.getElementById("add-btn");
const titleInput = document.getElementById("title");
const imgInput = document.getElementById("image");
const descriptionInput = document.getElementById("description");
const addressInput = document.getElementById("address");
const petInput = document.getElementById("pet");
const priceInput = document.getElementById("price");
const contactPersonNameInput = document.getElementById("contactPersonName");
const contactPersonNumberInput = document.getElementById("contactPersonNumber");




addBtn.addEventListener("click", () => {
    if (titleInput.value === "", imgInput.value === "", descriptionInput.value === "", addressInput.value === "") {
        alert("Fill all required infromation!");
        return
    };

    if (priceInput.value === "", contactPersonNameInput.value === "", contactPersonNumberInput.value === "") {
        alert("Fill all required infromation!");
        return
    }

    if (priceInput.value < 0 || priceInput.value > 5000) {
        alert("Pick price 0 to 5000 GEL!");
        return
    };

    const newStatement = new Statement(titleInput.value, contactPersonNameInput.value, contactPersonNumberInput.value, addressInput.value, descriptionInput.value, petInput.value, priceInput.value, imgInput.value,);
    
    addStatement(newStatement);

});



const addStatement = (statement) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/statements",
        data: JSON.stringify(statement)
    })
    .done(function (data) {
        window.location.href = "index.html";
    })
};


