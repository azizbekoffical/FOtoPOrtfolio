import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
    title: {type:String, required:true},
    discription: {type:String, required:true},
    title: {type:String, required:true},
    likes: {type:Number, required:true},
    views: {type:Number, required:true},
    name: {type:String, required:true}
},
    {
        timestamps:true
    }
);

export default model("Image", ImageSchema);