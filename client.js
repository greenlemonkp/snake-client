const { CONNREFUSED } = require("dns");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  }); 

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });
  conn.on("connect", () => {
    conn.write("Name: LJK");
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled")
  })
  return conn;
};
connect()
module.exports = {connect};