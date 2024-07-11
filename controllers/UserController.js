import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

export async function createUser(req, resp) {
    const { fullName, email, password, userType, phoneNo } = req.body;
    const isNewUser = await User.isThisEmailInUse(email);

    if (!isNewUser) {
        return resp.json({
            success: false,
            message: "This email is already in use try sign-in"
        });
    }
    const user = new User({ fullName, email, password, userType,phoneNo });
    await user.save();
    resp.json(user);
}

export async function userSignIn(req, resp) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return resp.json({ success: false, message: "User not found, with the given email!" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return resp.json({ success: false, message: "Email/password does not match!" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    resp.json({ success: true, user, token });
}
