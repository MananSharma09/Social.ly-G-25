import { message } from "../utils/message.js";
import { Response } from "../utils/response.js"
import Post from "../models/postModel.js"
import cloudinary from 'cloudinary'

export const createPost = async (req, res) => {
    try {
        const { image, caption, owner, mentions, location }=req.body;
        

        const result = await cloudinary.v2.uploader.upload(image, {
            folder: 'posts',
            // width: 150,
            // crop: "scale",
            // height: 150
        })
        req.body.image = {
            public_id: result.public_id,
            url: result.secure_url
        }

        const newPost =await Post.create({...req.body});

        Response(res,201,true,message.newPostCreated,newPost);

    } catch (error) {
        Response(res, 500, false, error.message);
    }
}