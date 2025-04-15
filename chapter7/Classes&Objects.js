
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello My name is ${this.name}`)
    }
}
let tekneikos= new Person("Tekneikos",21);
tekneikos.greet();

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);  // calls the parent class constructor 
        this.grade=grade
    }
    study(){
        console.log(`${this.name}is studying in grade/class ${this.grade}`)
    }
}

let temp= new Student("Tekneikos",21,"10th")
temp.greet();
temp.study();



// Prgram 1 


// Class representing a Room
class Room {
    constructor(roomNumber, type, price) {
      this.roomNumber = roomNumber;
      this.type = type;
      this.price = price;
      this.isBooked = false;
    }
  
    book() {
      if (!this.isBooked) {
        this.isBooked = true;
        console.log(`Room ${this.roomNumber} booked successfully!`);
      } else {
        console.log(`Room ${this.roomNumber} is already booked.`);
      }
    }
  
    checkOut() {
      if (this.isBooked) {
        this.isBooked = false;
        console.log(`Room ${this.roomNumber} is now available.`);
      } else {
        console.log(`Room ${this.roomNumber} is already vacant.`);
      }
    }
  }
  
  // Class representing a Hotel
  class Hotel {
    constructor(name) {
      this.name = name;
      this.rooms = [];
    }
  
    addRoom(room) {
      this.rooms.push(room);
    }
  
    listAvailableRooms() {
      console.log(`Available rooms in ${this.name}:`);
      this.rooms.forEach(room => {
        if (!room.isBooked) {
          console.log(`Room ${room.roomNumber} - ${room.type} ($${room.price}/night)`);
        }
      });
    }
  
    bookRoom(roomNumber) {
      let room = this.rooms.find(r => r.roomNumber === roomNumber);
      if (room) {
        room.book();
      } else {
        console.log(`Room ${roomNumber} does not exist.`);
      }
    }
  
    checkOutRoom(roomNumber) {
      let room = this.rooms.find(r => r.roomNumber === roomNumber);
      if (room) {
        room.checkOut();
      } else {
        console.log(`Room ${roomNumber} does not exist.`);
      }
    }
  }
  
  // Creating a hotel and adding rooms
  let myHotel = new Hotel("Grand Palace");
  
  myHotel.addRoom(new Room(101, "Standard", 100));
  myHotel.addRoom(new Room(102, "Deluxe", 150));
  myHotel.addRoom(new Room(103, "Suite", 250));
  
  myHotel.listAvailableRooms();
  
  myHotel.bookRoom(101);
  myHotel.bookRoom(102);
  
  myHotel.bookRoom(101);
  
  // Listing available rooms again
  myHotel.listAvailableRooms();
  
  // Checking out from a room
  myHotel.checkOutRoom(101);
  
  // List available rooms after checkout
  myHotel.listAvailableRooms();