const express = require("express");
const app = express();
const cors = require('cors');
const loginRoute = require('./routes/userLogin');
const getAllUsersRoute = require('./routes/userGetAllUsers');
const registerRoute = require('./routes/userSignUp');
const getUserByIdRoute = require('./routes/userGetUserById');
const dbConnection = require('./config/db.config');
const editUser = require('./routes/userEditUser');
const deleteUser = require('./routes/userDeleteAll');
const getAllCommentsRoute = require('./routes/getAllComments');
const contactContactMsg = require('./routes/contactContactMsg')
const commentAddComment = require('./routes/commentCreateComment')
const commentEditComment = require('./routes/commentEditComment')
const SERVER_PORT = 8096;
//backend server port

require('dotenv').config();

dbConnection();
app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/user', loginRoute);
app.use('/user', registerRoute);
app.use('/user', getAllUsersRoute);
app.use('/user', getUserByIdRoute);
app.use('/user', editUser);
app.use('/user', deleteUser);
app.use('/comments',  getAllCommentsRoute);
app.use('/contact', contactContactMsg);
app.use('/addComment', commentAddComment);
app.use('/comments', commentEditComment);
app.listen(SERVER_PORT, (req, res) => {
    console.log(`The backend service is running on port ${SERVER_PORT} and waiting for requests.`);
});

