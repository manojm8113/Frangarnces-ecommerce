const router = require("express").Router();
const company = require("../Model/CompanySchema");
const JWT = require("jsonwebtoken");
const Crypto = require("crypto-js");
router.post("/login", async (req, res) => {
  console.log("req body company datas",req.body);
  try {
    const findcompany = await company.findOne({ Email: req.body.Email });
    !findcompany && res.status(401).json("invalid Email");
    console.log("email", findcompany);
    const decryptepassword = Crypto.AES.decrypt(
      findcompany.Password,
      process.env.Crypto
    );
    var originalPassword = decryptepassword.toString(Crypto.enc.Utf8);
    console.log("orginal password is", originalPassword);
    req.body.Password != originalPassword &&
      res.status(401).json("invalid password");
      const tokens=JWT.sign({
        id:findcompany._id,
      },process.env.JWTSecky,{expiresIn:'1d'})
      console.log("Tokenss",tokens);
      res.status(200).json({tokens,id:findcompany._id})
  } catch (err) {
    res.status(500).json("error", err.message);
  }
});
module.exports = router;
