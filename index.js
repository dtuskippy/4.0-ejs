import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const d = new Date();
  let day = d.getDay()
  let sect1 = "";
  let sect2 = ""; 

  if(day > 0 && day < 6) {
    sect1 = "a weekday";
    sect2 = "work hard";
  } else {
    sect1 = "the weekend";
    sect2 = "have fun";
  }


  res.render("index.ejs", {sect1: sect1, sect2: sect2});
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
