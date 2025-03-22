
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