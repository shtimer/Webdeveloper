const express = require("express");
const app = express();

// Установка статической директории
app.use(express.static("public"));

// Ваш код приложения здесь...

// Запуск сервера
app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
