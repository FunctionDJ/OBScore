import io from "socket.io-client"
import {receivable} from "./socketEvents"

const socket = io("192.168.0.55:3001")

// socket.close()

export default socket

socket.on(receivable.connect, () => console.log("Connected"))
socket.on(receivable.disconnect, () => console.log("Disconnected"))