import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// var test = "gello";

// console.log(typeof test);

// let myfunc = () => {
//   return "Hello";
// };
// console.log(myfunc);

const players = [
  {
    fn: "Rod",
    standing: "1"
  },
  {
    fn: "Robert",
    standing: "2"
  },
  {
    fn: "Sam",
    standing: "3"
  },
  {
    fn: "Sharat",
    standing: "4"
  },
  {
    fn: "Darrin",
    standing: "5"
  }
];
// console.log(players);

// const podiumPlayers = players.filter((player) => player.standing <= 3);
// console.log(podiumPlayers);

// const players2 = ["Rod", "Robert"];

// const filteredPlayers2 = players2.filter((player) => player.length <= 3);
// console.log(filteredPlayers2);

const apiCall = () => {
  // const dbResult = { fn: "Rod", ln: "Nolan", isValidUser: true };
  // return dbResult.isValnnidUser1;
  throw new Error("Database error");
};

try {
  const isUserLoggedIn = apiCall();
  console.log(isUserLoggedIn);
} catch (error) {
  console.log(error.message);
}
