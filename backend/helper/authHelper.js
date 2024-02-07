const bcrypt = require("bcrypt");

 const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log(error);
  }
};

 const compare = async (hash, password) => {
  return bcrypt.compare(hash, password);
};


module.exports = {hashPassword, compare}
