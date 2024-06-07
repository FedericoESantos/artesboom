import express from 'express'; // importamos la libreria de express
import { engine } from 'express-handlebars'; // importamos la libreria de handlevars (para las vistas)
import { Server } from 'socket.io'; // importamos la librera de socket
//importar las rutas de las paginas
import historia from "./router/historia.route.js";
import diseño from "./router/diseño.route.js";
import cursos from "./router/cursos.route.js";
import cocina from "./router/cocina.route.js";
import contacto from "./router/contacto.route.js";
import carrito from "./router/carrito.router.js";
import chat from "./router/chat.router.js";
import fotos from "./router/fotos.router.js";
import literatura from "./router/literatura.router.js";


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public")); // aca seteo la carpeta de public 


app.engine("handlebars", engine()); //estas 3 lineas son el seteo del handlebars
app.set("views", "./src/views"); // aca enlazamos la ruta a las views, donde va todo nuestro html. Con __dirname no va .
app.set("view engine", "handlebars");

// VARIABLES PARA EL CHAT
let usuarios = []; // aca guardamos a los usuarios
let mensajes = []; // aca guardamos a los mensajes

//PAGINA DE HOME
app.get('/', (req, res) => { // con el seteo del handlebars, va a llamar desde el handlebars primero al home, y de ahi al main
    return res.render("home", { title: "Boom Arts" });
})

//PAGINAS
app.use("/", historia);
app.use("/", diseño);
app.use("/", cursos);
app.use("/", cocina);
app.use("/", contacto);
app.use("/", carrito);
app.use("/", chat);
app.use("/", fotos);
app.use("/", literatura);

//CONEXION AL SERVER
const serverHTTP = app.listen(port, () => { console.log(`Server escuchando en puerto port ${port}`) });
const io = new Server(serverHTTP);

io.on("connection", Socket => { // aca conectamos la comunicacion con el cliente. La palabra connection tiene que ser escrita correctamente para la comunicacion
    console.log("cliente conectado desde el front");

    // ------------------ ACA COMIENZA EL CHAT --------------------------------
    //CUANDO ALGUIEN SE IDENTIFICA
    Socket.on("id", nombre => { // aca voy a recibir el nombre y lo voy a almacenar en una variable usuarios de tipo array
        usuarios.push({ id: Socket.id, nombre: nombre }); // aca agrego el nombre que me manda al array incluyendo el nombre
        // usuarios.push({id: Socket.id}, nombre); el error en esta linea es que el array no incluia al nombre
        Socket.emit("mensajesPrevios", mensajes); // aca guardo el historial de los mensajes
        Socket.broadcast.emit("nuevoUsuario", nombre); // aca le envio un mensaje para todos menos para el ultimo con un nuevo nombre
    })
    //ACA RESPONDO LOS MENSAJES
    Socket.on("mensaje", (nombre, mensaje) => { // aca voy a recibir 2 cosas, el nombre y el mensaje
        mensajes.push({ nombre, mensaje }); // aca agrego el mensaje que me manda al array
        io.emit("nuevoMensaje", nombre, mensaje); // y aca vuelo a enviar a todos (io) el nombre y el mensaje
    })
    //CUANDO ALGUIEN SALE DEL CHAT
    Socket.on("disconnect", () => {
        let usuario = usuarios.find(usur => usur.id === Socket.id);
        // voy a buscar dentro de mis usuarios a todos cuyo id sea igual a socket.id
        if (usuario) { // si encontre al usuario
            io.emit("saleUsuario", usuario.nombre); //del usuario me detecta el id pero no el nombre
            console.log(usuario.nombre)
        }
    });


})

