require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  
  networks: {
    hardhat: {}, // Local development network
    Sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
//0x77a5F1b6703bf270B8C0549B270F9cAFB27DC6C7