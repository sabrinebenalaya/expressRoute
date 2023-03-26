const express = require('express');
const path = require('path');

const app = express();
const timeCheckMiddleware = (req, res, next) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const curentDay = currentTime.getDay();
 
  if ((curentDay>=1||curentDay<=5)||(currentHour < 9 || currentHour >= 17)) {
    res.status(403).send('Access denied. Service is only available Monday to Friday,  from 9 to 17');
  } else {
    next();
  }
};
app.use(timeCheckMiddleware);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/index', (request, response) => {
    response.render('Home', {
      subject: 'Home',
      link: './Views/Home.pug'
    });
  });
  app.get('/contact', (request, response) => {
    response.render('Contact', {
      subject: 'Contact us',
      link: './Views/Contact.pug'
    });
  });
  app.get('/home', (request, response) => {
    response.render('Home', {
      subject: 'Home',
      link: './Views/Home.pug'
    });
  });
  app.get('/service', (request, response) => {
    response.render('Services', {
      subject: 'Our services',
      link: './Views/Services.pug'
    });
  });
app.listen(5000, () => {
  console.log('App is listening on port 5000');
});