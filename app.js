import express from 'express';
import { engine } from 'express-handlebars';
import views from "./routes/views.router.js"; // aca importamos a views.router y dentro de alli metemos todas las rutas router.
import { Server } from 'socket.io';
// la carpeta layouts termina con s ..... no es layout
const port = 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static("./src/public"));
app.use("/", views);

let usuarios = []; // aca guardamos a los usuarios
let mensajes = []; // aca guardamos a los mensajes

const HTTPserver = app.listen(port, ()=>{
console.log(`Server escuchando en puerto port: ${port}`);
}) 


const io = new Server(HTTPserver); // server web socket - aca nos conectamos
//BACKEND
// aca comienza la comunicacion entre el backend y el fronted
io.on("connection", Socket=>{
    console.log(`Se ha conectado un cliente con ID ${Socket.id}`)

// ------------------ ACA COMIENZA EL CHAT --------------------------------

    //CUANDO ALGUIEN SE IDENTIFICA
Socket.on("id", nombre=>{ // aca voy a recibir el nombre y lo voy a almacenar en una variable usuarios de tipo array
    usuarios.push({id: Socket.id, nombre: nombre}); // aca agrego el nombre que me manda al array incluyendo el nombre
    // usuarios.push({id: Socket.id}, nombre); el error en esta linea es que el array no incluia al nombre
    Socket.emit("mensajesPrevios", mensajes); // aca guardo el historial de los mensajes
    Socket.broadcast.emit("nuevoUsuario", nombre); // aca le envio un mensaje para todos menos para el ultimo con un nuevo nombre
})
//ACA RESPONDO LOS MENSAJES
Socket.on("mensaje", (nombre, mensaje)=>{ // aca voy a recibir 2 cosas, el nombre y el mensaje
    mensajes.push({nombre, mensaje}); // aca agrego el mensaje que me manda al array
    io.emit("nuevoMensaje", nombre, mensaje); // y aca vuelo a enviar a todos (io) el nombre y el mensaje
})
//CUANDO ALGUIEN SALE DEL CHAT
Socket.on("disconnect", ()=>{
    let usuario = usuarios.find(usur=>usur.id===Socket.id); 
    // voy a buscar dentro de mis usuarios a todos cuyo id sea igual a socket.id
    if(usuario){ // si encontre al usuario
        io.emit("saleUsuario", usuario.nombre); //del usuario me detecta el id pero no el nombre
        console.log(usuario.nombre)
    }

    
});





})