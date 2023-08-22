// const element = <h1>Hello, world!</h1>

const name = "Josh Perez";

const element = <h1>Hello, {name}</h1>;
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element1 = <h1>Hello, {formatName(user)}!</h1>;

const commit = '<script>console.log("send accsec")</script>';
