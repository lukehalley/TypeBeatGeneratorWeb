export default {
    sendMessage(context, data) {
        console.log("Got New Message!");
        const newMessage = {
            id: 1234,
            senderId: 1,
            senderUsername: "luke123halley",
            recieverId: 2,
            recieverUsername: data.recipientUsername,
            messageBody: data.messageBody,
        }
        context.commit('sendMessage', newMessage)
    }
};