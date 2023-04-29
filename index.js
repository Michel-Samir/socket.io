const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=> {
    console.log('A user connected');
    socket.on('disconnect', ()=> {
        console.log('A user disconnected')
    });
});

http.listen(4000, "localhost", ()=> {
    console.log("listening on port 4000");
});