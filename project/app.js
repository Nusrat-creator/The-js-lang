const express = require('express');
const app = express();


const songs = [
    "My Way",
    "Fly Me To The Moon",
    "Strangers In The Night",
    "Come Fly With Me",
    "I've Got You Under My Skin",
    "New York, New York",
    "That's Life",
    "Summer Wind",
    "The Way You Look Tonight",
    "Love And Marriage",
    "It Was A Very Good Year",
    "My Kind Of Town",
    "You Make Me Feel So Young",
    "In The Wee Small Hours Of The Morning",
    "The Best Is Yet To Come",
    "White Christmas",
    "I Get A Kick Out Of You",
    "The Lady Is A Tramp",
    "Moon River",
    "The Girl From Ipanema"
  ];

  const birthDate = "December 12, 1915";
  const birthCity = "Hoboken, New Jersey, US";
  

  const wives = "Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx";

  
  app.get('/', (req, res)=>{
    res.send(songs[Math.floor(Math.random() * songs.length)]);
});

app.get('/birth_date', (req, res)=>{
    res.send(birthDate);
});

app.get('/birth_city', (req, res)=>{
    res.send(birthCity);
});

app.get('/wives', (req, res)=>{
    res.send(wives);
});

app.get('/picture', (req, res)=>{
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg');
});

  
app.get('/public', (req, res) => {
    res.send("Everybody can see this page");
  });


  app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Protected Area"');
      return res.status(401).send('Not authorized');
    }
  
    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];
  
    if (username === 'admin' && password === 'admin') {
      return res.send('Welcome, authenticated client');
    } else {
      res.setHeader('WWW-Authenticate', 'Basic realm="Protected Area"');
      return res.status(401).send('Not authorized');
    }
  });

  app.listen(8080, "0.0.0.0", () => {
    console.log("Server işləyir: http://localhost:8080");
  });