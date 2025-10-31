import {mongoose, Schema} from 'mongoose';

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    accountType:{
        type: String,
        required: true,
        enum:["Admin", "Student", "Instructor"],
    },
    additionalDetails:{
        type: Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    courses:[
        {
            type: Schema.Types.ObjectId,
        ref: "Course",
        }
    ],
    image:{
        type: String,
        required: true,
    },
    courseProgress:[
        {
            type: Schema.Types.ObjectId,
            ref: "CourseProgress",
        }
    ],
    
},{timestamps: true});

export const User = mongoose.model('User', userSchema);
