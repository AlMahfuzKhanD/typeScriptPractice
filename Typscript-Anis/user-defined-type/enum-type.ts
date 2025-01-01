// enum store constant, duplicate value is not allowed
// numeric enum
enum RequestType {
  ReadData,
  SaveData,
  DeleteData,
}
console.log(RequestType);

// string enum

enum RequestString {
  getData = "Read",
  deleteData = "Delete",
}

console.log(RequestString.deleteData);
//heterogenous
enum RequestType3 {
  getData = "Read",
  deleteData = "Delete",
  id = 101,
}
