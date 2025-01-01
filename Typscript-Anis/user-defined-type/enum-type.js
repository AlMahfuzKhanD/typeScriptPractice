// enum store constant, duplicate value is not allowed
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["SaveData"] = 1] = "SaveData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequestString;
(function (RequestString) {
    RequestString["getData"] = "Read";
    RequestString["deleteData"] = "Delete";
})(RequestString || (RequestString = {}));
console.log(RequestString.deleteData);
//heterogenous
var RequestType3;
(function (RequestType3) {
    RequestType3["getData"] = "Read";
    RequestType3["deleteData"] = "Delete";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
