const User = require("../models/userModel");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signupBody = zod.object({
    email: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string(),
})

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

const signupUser = async (req, res, next) => {
    try {
        const { success } = signupBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs",
            })
        }

        const existingUser = await User.findOne({
            email: req.body.email
        })

        if (existingUser) {
            return res.status(411).json({
                message: "Email already taken"
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        })

        const userId = user._id;

        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET)

        res.status(200).json({
            message: "User created successfully",
            token: token
        })
    }
    catch (ex) {
        next(ex);
        return res.json(500).send({
            message: ex
        })
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { success } = signinBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs",
            })
        }

        const existingUser = await User.findOne({
            email: req.body.email
        })

        if (!existingUser) {
            return res.status(411).json({
                message: "Incorrect Username or Password"
            })
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(411).json({
                message: "Incorrect Username or Password"
            })
        }
        const userId = existingUser._id;

        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET)

        return res.status(200).json({
            message: token
        })
    }
    catch (ex) {
        next(ex);
        return res.json(500).send({
            message: ex
        })
    }
}

module.exports = {
    signupUser,
    loginUser
}