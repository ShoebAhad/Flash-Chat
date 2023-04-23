const app=require('express')();
const server=require("http").createServer(app);
const cors=require('cors');


//This is  socket.io requirement and there is a parameter server and an object named cors


const io =require("socket.io")(server,{
    cors:{
        origin: "*",
        method:["GET","POST"]

    }

});



 app.use(cors());
 const PORT =process.env.PORT || 3000;

 // get funcion to connect with server.
 
 app.get('/', (req, res) => {
    res.send("Server is running.");
 });


 // This sockethandler function  is for connection ;


 io.on('connection',(socket)=>{
    socket.emit('shoeb',socket.id);


// This is the socketHandler function for disconnection 



    socket.on('disconnect',()=>{
     socket.broadcast.emit('Call Ended');
    });


// Socket handler for user data.


    socket.on('calluser',({userToCall,signalData,from,name})=>{

        io.to(usertoCall).emit("calluser",{signal:signalData,from,name})

    });



 // socket handler for accepting call

    socket.on('call accepted',(data)=>{
        io.to(data.to).emit("callaccepted",data.signal);
    });


 
 });
 

server.listen(PORT,() => console.log('Server is listening on port', PORT ));