class Car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    displayInfo(){
        console.log(`${this.brand} ${this.model} ${this.year}`)
    }
}

let car1 = new Car("Tata", "Nano", 2000);
car1.displayInfo();

// Example 2
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.isLoggedIn = false; 
    }
  
    login() {
      this.isLoggedIn = true;
      console.log(`${this.name} logged in.`);
    }
  }
  
  let user1 = new User("Tekneikos", "tekneikos@example.com");
  user1.login(); 

  // destructors 

  class Users{
    constructor(name){
        this.name=name;
        console.log(`user ${this.name} is created`);
    }
   dipose(){
    console.log(`User ${this.name} is beign removed`);
    this.name=null;
   }
  }
  let user1111=new Users("tekneikos");
  user1111.dipose();

  //Another method 2 

  class User {
    constructor(name) {
      this.name = name;
      console.log(`User ${this.name} created`);
    }
  }
  const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Object with value "${heldValue}" is garbage collected.`);
  });
  function createUser(name) {
    let user = new User(name);
    registry.register(user, name); 
    return user;
  }
  let user2 = createUser("Bob");

  user2 = null;