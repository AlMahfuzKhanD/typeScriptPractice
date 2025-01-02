class User {
  // public , private , protected , readonly

  readonly userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age},`);
  }
}

class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Oli", 26, 12);
student1.setStudentId(123456);
console.log(student1.getStudentId());
// class object
let user1 = new User("Al Mahfuz", 23);
// user1.userName = "Kaua";
console.log(user1);
