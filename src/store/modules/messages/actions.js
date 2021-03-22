export default {
    sendMessage(context, data) {
        const newMessage = {
            id: 1234,
            senderId: context.rootGetters["userStore/userId"],
            senderUsername: context.rootGetters["userStore/username"],
            recieverId: data.recipientUserId,
            recieverUsername: data.recipientUsername,
            messageBody: data.messageBody,
        }
        console.log(newMessage);
        context.commit('sendMessage', newMessage)
    }
};