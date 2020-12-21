import React, { useEffect } from 'react';
import openSocket from 'socket.io-client';


const SOCKET_URL = "https://fitness-app-socket.herokuapp.com:443";
let socket;

// const SocketService = () => {
//     const setupSocket = () => {
//         socket = openSocket(SOCKET_URL);
//         socket.on("createRoom", (data) => {
//             console.log('createRoom :', data)
//         });

//         socket.on("joinRoom", (data) => {
//             console.log('joinRoom :', data)
//         });

//         socket.on("sendDetails", (data) => {
//             console.log('sendDetails :', data)
//         });
//     };

//     useEffect(setupSocket,[])
//     return <></>;
// }
// export default SocketService;


export const setupSocket = (setRoomId) => {
    socket = openSocket(SOCKET_URL);
    socket.on("createRoom", (data) => {
        console.log('createRoom :', data)
        const roomId = JSON.parse(data).roomId;
        setRoomId(roomId);
    });

    socket.on("joinRoom", (data) => {
        console.log('joinRoom :', data)
        setRoomId(data.roomId);
    });

    socket.on("sendDetails", (data) => {
        console.log('sendDetails :', data)
    });

    return socket;
};

const sendSocket = (data) => {
    socket.emit("command", {
        type: data.type,
        id: data.id,
        content: data.content,
    });
};

export const sendTestSocket = (data) => {
    socket.emit("command", data);
};