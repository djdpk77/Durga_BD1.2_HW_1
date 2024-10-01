const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Create an endpoint that takes the marks in two subjects and returns the total marks.
app.get('/total-marks', (req, res) => {
  //let marks1 = parseInt(req.query.marks1);
  let marks1 = parseFloat(req.query.marks1);
  let marks2 = parseFloat(req.query.marks2);

  let totalMarks = marks1 + marks2;
  //console.log(typeof totalMarks);
  //totalMarks = parseInt(totalMarks);
  //console.log(typeof totalMarks);
  res.send(totalMarks.toString());
});

app.get('/total-weight', (req, res) => {
  let weight1 = parseFloat(req.query.weight1);
  let weight2 = parseFloat(req.query.weight2);
  let weight3 = parseFloat(req.query.weight3);

  let totalWeight = weight1 + weight2 + weight3;
  res.send(totalWeight.toString());
});

app.get('/monthly-salary', (req, res) => {
  let annualSalary = parseFloat(req.query.annualSalary);

  let monthlySalary = annualSalary / 12;
  res.send(monthlySalary.toString());
});

app.get('/total-pages', (req, res) => {
  let pagesPerDay = parseFloat(req.query.pagesPerDay);
  let days = parseFloat(req.query.days);

  let totalPages = pagesPerDay * days;
  res.send(totalPages.toString());
});

app.get('/currency-conversion', (req, res) => {
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);

  let convertedAmount = amount * exchangeRate;
  res.send(convertedAmount.toString());
});

app.get('/average-sales', (req, res) => {
  let sales1 = parseFloat(req.query.sales1);
  let sales2 = parseFloat(req.query.sales2);
  let sales3 = parseFloat(req.query.sales3);

  let avgSales = (sales1 + sales2 + sales3) / 3;
  res.send(avgSales.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
