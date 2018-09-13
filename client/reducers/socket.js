import io from 'socket.io-client'
const scoket = io("http://localhost:8080")

export default (state = socket, action) => state
