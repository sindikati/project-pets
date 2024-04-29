class Statement{
    constructor( title, contactPersonName, contactPersonNumber, address, description, pet, price, img){
        this.title = title
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address;
        this.description = description;
        this.pet = pet;
        this.price = price;
        this.img = img;
    }
};


class Pet{
    constructor(category, age, gender){
        this.category = category;
        this.age = age;
        this.gender = gender;
    }
};

class Cat extends Pet{
    constructor(category, age, gender, toiletFriendly){
        super(category, age, gender)
        this.toiletFriendly= toiletFriendly;
    }
};


const statement = new Statement('ჩუქდება თეთრი კნუტი 1 თვის','ლუკა','555555555','თბილისი','არის საყვარელი',null,0,null); 

