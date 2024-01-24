import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5000",
  },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  console.log('onlineUsers:',onlineUsers);

  if (!onlineUsers.some((user) => user.username === username)) {
    onlineUsers.push({ username, socketId });
  }
};


const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  const user = onlineUsers.find((user) => user.username === username);
  console.log('getUser', onlineUsers);
  return user;
};



io.on("connection", (socket) => {
  console.log("socket connected");
  
  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });

  socket.on("sendNotification", ({ senderName, receiverName, type }) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("sendText", ({ senderName, receiverName, text }) => {
    console.log('====================================');
    console.log(senderName);
    console.log('====================================');
    console.log(receiverName);
    const receiver = getUser(receiverName);
    if (receiver) {
      io.to(receiver.socketId).emit("getText", {
        senderName,
        text,
      });
    } else {
      // Handle the case where the receiver is not found
      console.error(`Receiver not found for username: ${receiverName}`);
    }
    
  });

  socket.on("disconnect", () => {
    console.log('====================================');
    console.log('desconnected');
    console.log('====================================');
    removeUser(socket.id);
  });
});

io.listen(5000);