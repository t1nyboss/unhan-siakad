const {User} = require("../models");

exports.userIndex = async (req, res) => {
    try {
        const users = await User.findAll({});
        return res.json(users)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.userAll = async (req, res) => {
    try {
        const users = await user.findAll({ paranoid: false })
        return res.json(users)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await user.findOne({
            where: {
                username: username
            },
        })

        if (!user) {
            return res.status(404).json({message:"user not found"});
        } else if (!await user.validPassword(password)) {
            return res.status(404).json({message:"password is wrong"});
        } else {
            return res.status(200).json(user)
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.userShow = async (req, res) => {
    const id = req.params.uuid
    try {
        const user = await User.findOne({
            where: {
                id: id
            },
        })

        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.userCreate = async (request, res) => {
    const { studentId, fullName, email,  password, mobile } = request.body
    try {
        const user = await User.create({
            studentId: studentId,
            fullName:fullName,
            email:email,
            password:password,
            mobile:mobile
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.userUpdate = async (req, res) => {
    const id = req.params.id
    const { password } = req.body
    try {
        const user = await User.update({
            password
        }, {
            where: {
                id: id
            }
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.userSoftDelete = async (req, res) => {
    const id = req.params.uuid
    try {
        const user = await User.destroy({
            where: {
                id: id
            }
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.userHardDelete = async (req, res) => {
    const id = req.params.uuid
    try {
        const user = await User.destroy({
            where: {
                id: id
            },
            force: true
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}
