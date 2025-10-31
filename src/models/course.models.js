import {mongoose, Schema} from 'mongoose';

const courseSchema = new Schema({
    courseName: {
        type: String,
    },
    courseDescription: {
        type: String,
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    whatYouWillLearn: {
        type: String,
    },
    courseContent:[
        {
            type: Schema.Types.ObjectId,
            ref: "Section",
        }
    ],
    ratingAndReviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "RatingAndReview",
        }
    ],
    price: {
        type: Number,
    },
    tumbnail: {
        type: String,
    },
    tag: {
        type: Schema.Types.ObjectId,
        ref: "Tag",
    },
    studentEnrolled: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    ]
});

export const Course = mongoose.model('Course', courseSchema);