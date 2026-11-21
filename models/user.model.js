import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        require: [true, 'User Name is required!'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        require: [true, 'Email is required!'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        require: [true, 'User Password is required'],
        minLength: 8,
        maxLength: 255
    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;