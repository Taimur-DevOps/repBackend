import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true

    },
    userType: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 8, (err, hash) => {
            if (err) return next(err);

            this.password = hash;
            next();
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error("Password is missing, can't compare");
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        console.log("Error while comparing password !!", err.message);
    }
};

userSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error("Invalid Email!");
    try {
        const user = await this.findOne({ email });
        return !user;
    } catch (err) {
        console.log("Error inside isThisEmailInUse method", err.message);
        return false;
    }
};

export default mongoose.model('User', userSchema);
