import {mongoose, Schema} from 'mongoose';

const profileSchema = new Schema({
    gender:{
        type: String,
    },
    dateOfBirth:{
        type: Date,
    },
    about:{
        type: String,
    },
    contactNumber:{
        type: Number,
    },

});

export const Profile = mongoose.model('Profile', profileSchema);