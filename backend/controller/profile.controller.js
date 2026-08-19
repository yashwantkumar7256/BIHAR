const userModel = require("../models/user.model");

const getStudentProfile = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Profile fetched successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getStudentProfile
};