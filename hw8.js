
// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(userId) {
    return fetch(`https://reqres.in/api/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(data => data.data)
      .catch(error => {
        throw new Error(error.message);
      });
  }
  getUserData(12)
  .then(userData => {
    console.log(userData);
  })
  .catch(error => {
    console.error(error.message);
  });

//   Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
  function saveUserData(userData) {
    return fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.status === 201) {
        return Promise.resolve();
      } else {
        return Promise.reject(new Error('Failed to save user data'));
      }
    });
  }
  
  const user = {
    "name": "John Doe",
    "job": "unknown"
  };
  
  saveUserData(user)
    .then(() => {
      console.log('User data saved successfully');
    })
    .catch(error => {
      console.log(error.message);
    });