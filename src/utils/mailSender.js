import nodemailer from 'nodemailer';

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        }); 

        let info = await transporter.sendMail({
            from: "StudyNotion || Shivam Mishra - Boymax",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Mail sent successfully:", info);
        return info;
        
    } catch (error) {
        console.log("Error in mail sender utility:", error);
    }
}

export default mailSender;

