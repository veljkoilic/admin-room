const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const server = app.listen(3001, function() {
    console.log('Server running on port :3001');
});

app.post("/", (req, res)=> {
    let newPost = {
		title: req.body.title,
		category: req.body.text,
		author: req.body.image
    };
    res.send(newPost)
})

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log("A new User connected!")
    socket.on('addPost', function(data) {
        console.log("Server recieved:")
        console.log(data);
        socket.broadcast.emit('retrievePost', data);
        socket.emit('retrievePost', data);
    });
});
