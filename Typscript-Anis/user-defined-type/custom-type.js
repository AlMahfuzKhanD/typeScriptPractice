var users;
users = [];
var user1;
user1 = { userName: "anisul", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Mahfuz", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "Khan", userId: 103 };
users.push(user3);
// for (const key in users) {
//   console.log(users[key]["userName"]);
// }
console.log(users);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
