import {StreamChat} from "stream-chat";
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Stream API Key or Secret is missing!!");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData)=>{//if the user doesn't exst it will create it otherwise it will update the data
    try{
        await streamClient.upsertUsers([userData]);//upsert means either create or update depending on the case

        return userData;
    }catch(error){
        console.log("Error in upserting stream user: ", error);
    }
};


export const generateStreamToken = (userId)=>{
    try {
        //ensure userid is a string or not
        const userIdStr = userId.toString(); 
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error("Error in generating stream token : ", error);
    }
};