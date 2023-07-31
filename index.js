import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay()
let sect1 = "";
let sect2 = ""; 

function figureTheDay(day) {
  if(day > 0 && day < 6) {
    sect1 = "a weekday";
    sect2 = "work hard";
  } else {
    sect1 = "the weekend";
    sect2 = "have fun";
  }
 
}

app.use(figureTheDay);


app.get('/', (req, res) => {
  res.render("index.ejs", {sect1: sect1, sect2: sect2});
});

// app.post...
// res.render("index.ejs",
// {name: req.body.name}
// });








app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
