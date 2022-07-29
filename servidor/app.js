import express from "express";
import cors from 'cors';
import db from "./mundo/DataBase.js";
import rutas from "./rutas/Rutas.js";
import http from 'http';
import {Server} from "socket.io";

const app= express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.static("./uploads/imagen/plato"));
app.use(express.static("./uploads/imagen/usuario"));
app.use('', rutas);

try {
    db.authenticate();
    console.log("Conexión exitosa");
} catch (error) {
    console.log("El error de conexión es: "+error);
}

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});


server.listen(8000,()=>{
   console.log('Server Up running in http://localhost:8000/');
});

