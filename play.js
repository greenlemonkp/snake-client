const {connect} = require("./client.js");
const { setupInput } = require("./input");
console.log("Connecting ..."); //shows connection in progress.



setupInput(connect());
