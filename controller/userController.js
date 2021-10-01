const User = require("../models/User");

module.exports = {
  findOneCreateOne: async (req, res) => {
    /**
     * commented out values below
     * destructed from req.body
     * are being received via frontend and auth0
     * they are not currently being used in our
     * model but maybe we would like
     * to save that data later
     */
    const {
      email,
      //   email_verified,
      family_name,
      given_name,
      //   locale,
      name,
      //   nickname,
      picture,
      sub,
      //   updated_at,
    } = req.body;

    try {
      const user = await User.findOne({ auth0Id: sub });
      if (user) {
        return res.status(200).json({ userProfile: user });
      } else {
        const newUserProfile = new User({
          firstName: given_name,
          lastName: family_name,
          name,
          email,
          avatar: picture,
          auth0Id: sub,
        });
        const saved = await newUserProfile.save();
        return res.status(200).json({ userProfile: saved });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
