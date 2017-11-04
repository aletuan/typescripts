function greeter(person) {
    return "Hello, " + person.firstName + ", " + person.lastName;
}
var user = { firstName: "Tuan Anh", lastName: "Le" };
document.body.innerHTML = greeter(user);
