import { io } from "socket.io-client";
import { receivable } from "./socketEvents";

const socket = io("http://localhost:3001");

// socket.close()

export default socket;

socket.on(receivable.connect as string, () => console.log("Connected"));
socket.on(receivable.disconnect as string, () => console.log("Disconnected"));