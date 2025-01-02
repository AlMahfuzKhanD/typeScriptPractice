type User = { userName: string; userId: number };
let users: User[];
users = [];

let user1: User;
user1 = { userName: "anisul", userId: 101 };
users.push(user1);
let user2: User;
user2 = { userName: "Mahfuz", userId: 102 };
users.push(user2);

let user3: User;
user3 = { userName: "Khan", userId: 103 };
users.push(user3);

// for (const key in users) {
//   console.log(users[key]["userName"]);
// }

console.log(users);
type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}

requestHandler("GET");
