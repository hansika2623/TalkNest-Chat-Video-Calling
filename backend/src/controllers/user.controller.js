import FriendRequest from "../models/FriendRequest.js";
import User from "../models/User.js";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      //Since we will be having two different conditions so we will be using $and
      $and: [
        { _id: { $ne: currentUserId } }, //$ne-> not equal to means exclude the current user
        { _id: { $nin: currentUser.friends } }, //$nin -> not in means those who are not the friends of current user
        { isOnBoarded: true }, //means if user is not onboarded then we can't see the recommendations
      ],
    });
    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error in getRecommendation controller : ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyFriends(req, res) {
  try {
    // current user -> select -> friends field -> Now we will only get ids so we populate the friends fields to get all other related fields like fullName profilePic nativeLanguage etc.

    //populate is used because we want to access the data and not only the ids.
    const user = await User.findById(req.user.id)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLanguage learningLanguage"
      );

    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Error in getMyFriends controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function sendFriendRequest(req, res) {
  try {
    const myId = req.user.id;
    const { id: recipientId } = req.params;

    //prevent sending request to yourself
    if (myId == recipientId) {
      return res
        .status(400)
        .json({ message: "You can't send friend request to yourself" });
    }

    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(400).json({ message: "Recipient not found" });
    }
    if (recipient.friends.includes(myId)) {
      //that means we are already friends
      return res
        .status(400)
        .json({ message: "You are already friends with this user" });
    }

    //checks if a request already exists or not
    const existingRequest = await FriendRequest.findOne({
      $or: [
        { sender: myId, recipient: recipientId },
        { sender: recipientId, recipient: myId },
      ],
    });
    if (existingRequest) {
      return res.status(400).json({
        message: "A friend musr already exists between you and this user",
      });
    }

    const friendRequest = await FriendRequest.create({
      sender: myId,
      recipient: recipientId,
    });
  } catch (error) {
    console.error("Error in sendFriendRequest controller : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function acceptFriendRequest(req,res){
    try {
        const {id:requestId} = req.params;
        const friendRequest = await FriendRequest.findById(requestId);

        if(!friendRequest){
            return res.status(404).json({message:"Friend request not found"});
        }

        //Verfify the current user is the recipient
        if(friendRequest.recipient.toString() !== req.user.id){
            return res.status(403).json({message:"You are not authorized to accept this request"});
        }

        friendRequest.status="accepted";
        await friendRequest.save();

        //add each user to the other's friends array
        //$addToSet: adds elements to an array only if they do not already exists
        await User.findByIdAndUpdate(friendRequest.sender,{
          $addToSet : {friends: friendRequest.recipient},
        });

        await User.findByIdAndUpdate(friendRequest.recipient,{
          $addToSet : {friends: friendRequest.sender},
        });

         // Debug logs
    console.log("Sender in request: ", friendRequest.sender);
    console.log("Recipient in request: ", friendRequest.recipient);
    console.log("Status after update: ", friendRequest.status);
        res.status(200).json({message:"Friend request accepted"});
        
    } catch (error) {
        console.log("Error in acceptFriendRequest controller : ", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function getFriendRequests(req,res){
  try {
    const incomingReqs = await FriendRequest.find({
      recipient:req.user.id,
      status:"pending",
    }).populate("sender","fullName profilePic nativeLanguage learningLanguage");

    const acceptedReqs = await FriendRequest.find({
      sender:req.user.id,
      status:"accepted",
    }).populate("recipient","fullName profilePic");

    res.status(200).json({incomingReqs, acceptedReqs});
  } catch (error) {
    console.log("Error in getFriendRequests controller : ",error.message);
    res.status(500).json({message:"Internal server error"});
  }
}

export async function getOutgoingFriendReqs(req, res){
  try {
    const outgoingRequests = await FriendRequest.find({
      sender:req.user.id,
      status:"pending",
    }).populate("recipient","fullName profilePic nativeLanguage learningLanguage");

    res.status(200).json(outgoingRequests);
  } catch (error) {
    console.log("Error in getFriendReqs controller : ", error.message);
    res.status(500).json({message:"Internal Server error"}); 
  }
}