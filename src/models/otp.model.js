import {mongoose, Schema} from 'mongoose';
import mailSender from '../utils/mailSender.js';

const OTPSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 5 * 60, // 5 minutes
    }
});

//A functn -> to send emails
async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", otp);
        console.log("Email sent successfully:", mailResponse);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw error;
    }
}

OTPSchema.pre("save", async function (next) {
        await sendVerificationEmail(this.email, this.otp);
        next();
    });

export const OTP = mongoose.model('OTP', OTPSchema);