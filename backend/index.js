require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));


const port = process.env.PORT || 3000;
app.use(bodyParser.json());
const indexRouter = require('./src/routers/index');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('dev'));
app.use('/', indexRouter);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});








//DELETE
/*


Необхідні API методи:

POST /auth/register - реєстрація користувача. Отримує JSON-об'єкт з полями:
username
password
role (учасник чи власник)
firstName
lastName
course
faculty
specialty
about
githubLink
avatar
Віддає JSON-об'єкт з ключем "token", який містить JWT-токен для авторизації користувача.
POST /auth/login - авторизація користувача. Отримує JSON-об'єкт з полями:
username
password
Віддає JSON-об'єкт з ключем "token", який містить JWT-токен для авторизації користувача.
GET /projects - отримання всіх проектів. Віддає JSON-об'єкт з масивом проектів. Кожен проект представлений JSON-об'єктом з полями:
id
name
description
complexity
developmentTime
technologyStack
subjectArea
participantsCount
status
githubLink
POST /projects - створення проекту. Отримує JSON-об'єкт з полями:
name
description
complexity
developmentTime
technologyStack
subjectArea
participantsCount
status
githubLink
Віддає JSON-об'єкт з ключем "id", який містить ID створеного проекту.
GET /projects/:id - отримання проекту за ID. Віддає JSON-об'єкт з проектом.
PUT /projects/:id - редагування проекту. Отримує JSON-об'єкт з полями:
name
description
complexity
developmentTime
technologyStack
subjectArea
participantsCount
status
githubLink
Віддає JSON-об'єкт з ключем "id", який містить ID зміненого проекту.
DELETE /projects/:id - видалення проекту. Віддає JSON-об'єкт з ключем "id", який містить ID видаленого проекту.
GET /projects/:id/participants - отримання учасників проекту. Віддає JSON-об'єкт з масивом учасників. Кожен учасник представлений JSON-об'єктом з полями:
id
username
firstName
lastName
role
avatar
POST /projects/:id/participants/:username - додавання учасника до проекту. Віддає JSON-об'єкт з ключем "id", який містить ID проекту, до якого додано учасника.
DELETE /projects/:id/participants/:username - видалення учасника з проекту. Віддає JSON-об'єкт з ключем "id", який містить ID проекту, з якого видалено учасника.
GET /projects/:id/tasks - отримання завдань проекту. Віддає JSON-об'єкт з масивом завдань. Кожен завдання представлений JSON-об'єктом з полями:
id
name
description
assignee
creationDate
importance
status
deadline
POST /projects/:id/tasks - додавання завдання до проекту. Отримує JSON-об'єкт з полями:
name
description
assignee
creationDate
importance
status
deadline
Віддає JSON-об'єкт з ключем "id", який містить ID створеного завдання.
GET /projects/:id/tasks/:id - отримання завдання за ID. Віддає JSON-об'єкт з завданням.
PUT /projects/:id/tasks/:id - редагування завдання. Отримує JSON-об'єкт з полями:
name
description
assignee
creationDate
importance
status
deadline

 */
