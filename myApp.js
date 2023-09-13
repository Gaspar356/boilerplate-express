let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/public",express.static(__dirname + "/public" ));

const express = require('express');


app.get('/json', (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';

  if (messageStyle === 'uppercase') {
    res.json({ message: 'HELLO JSON' });
  } else {
    res.json({ message: 'Hello json' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

































 module.exports = app;
