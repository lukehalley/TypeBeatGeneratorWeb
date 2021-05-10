import {API} from "aws-amplify";
import {createMessage} from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

export default {
    async sendMessage(context, formData) {
        // Get current user id and username.
        const userId = context.rootGetters["authStore/userId"]
        const username = context.rootGetters["authStore/username"]

        // Create new Beat object.
        const newMessage = {
            senderId: userId,
            senderUsername: username,
            recieverId: formData.recipientUserId,
            recieverUsername: formData.recipientUsername,
            messageBody: formData.messageBody,
        }

        // Create the promise were going to use to create the new message.
        const promise = API.graphql({
            query: createMessage,
            variables: { input: newMessage },
        });

        // Create the message, catch any errors.
        try {
            await promise.then(function (result) {
                console.log(result.data.createMessage);

                const sentMessage = result.data.createMessage

                // Add the newly created message to our local list of messages.
                context.commit('addMessageLocally', { sentMessage, id: userId })
            });
        } catch (error) {
            // If creating our message caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.errors[0].message || "Failed to upload message!")
        }
    },
    async getMessages(context) {
        // Fetch the messages.
        const fetchMessages = API.graphql({ query: queries.listMessages })

        // Execute the get request, catch any errors.
        try {
            await (fetchMessages).then(function (messages) {
                // Gets the list of messages.
                const recievedMessages = messages.data.listMessages.items;

                // Create new messages list.
                const newMessages = []

                // Iterate through recievedMessages list and map them to add to local message list.
                for (const key in recievedMessages) {
                    const message = {
                        id: recievedMessages[key].id,
                        senderId: recievedMessages[key].senderId,
                        senderUsername: recievedMessages[key].senderUsername,
                        recieverId: recievedMessages[key].recieverId,
                        recieverUsername: recievedMessages[key].recieverUsername,
                        messageBody: recievedMessages[key].messageBody
                    }
                    newMessages.push(message)
                }

                // Add the fetched messages to our local list of messages.
                context.commit('setMessagesLocally', newMessages)
            });
        } catch (error) {
            // If getting our messages caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.errors[0].message || "Failed to load messages!")
        }
    }
};