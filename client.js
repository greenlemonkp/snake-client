const { CONNREFUSED } = require("dns");
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  }); 

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });
  conn.on("connect", () => {
    conn.write("Name: LJK");
  });
  conn.on("connect", () => {
    // conn.write("Move: up");
  });
  conn.on("data", (data) => { 
    console.log(data)
  })
  return conn;
};

module.exports = {connect};