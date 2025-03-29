require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const Result = require("./models/result");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const URLDB = process.env.URLDB;
const USER = process.env.EMAIL_USER;
const PASSWORD = process.env.EMAIL_PASSWORD;
const SERVICE = process.env.EMAIL_SERVICE;

const transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});

app.post("/send-email", async (req, res) => {
  const {
    loanAmount,
    monthlyInterestRate,
    totalInterestRate,
    monthlyPayment,
    requiredIncome,
    email,
  } = req.body;

  try {
    const newResult = new Result({
      loanAmount,
      monthlyInterestRate,
      totalInterestRate,
      monthlyPayment,
      requiredIncome,
      email,
    });

    const savedResult = await newResult.save();

    sendEmail(savedResult);

    res.json({
      message: "Данные сохранены. Письмо будет отправлено.",
      resultId: savedResult._id,
    });
  } catch (error) {
    console.error("Ошибка:", error);
    res
      .status(500)
      .json({ error: "Ошибка при сохранении данных: " + error.message });
  }
});

async function sendEmail(result) {
  const {
    _id,
    loanAmount,
    monthlyInterestRate,
    totalInterestRate,
    monthlyPayment,
    requiredIncome,
    email,
  } = result;

  try {
    const mailOptions = {
      from: USER,
      to: email,
      subject: "Результаты расчета кредита",
      text: `Результаты расчета (email: ${email}):
        Сумма кредита: ${loanAmount}руб
        Ежемесячная процентная ставка: ${monthlyInterestRate}%
        Общая процентная ставка: ${totalInterestRate}%
        Ежемесячный платеж: ${monthlyPayment}руб
        Необходимый доход: ${requiredIncome}руб`,
    };

    await transporter.sendMail(mailOptions);
    await Result.findByIdAndUpdate(_id, { sent: true });
    console.log(`Email отправлен для результата с email: ${_id}`);
  } catch (error) {
    console.error(
      `Ошибка при отправке email для результата с ID ${_id}:`,
      error
    );
  }
}

const start = async () => {
  try {
    await mongoose.connect(URLDB, { authSource: "admin" });
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
