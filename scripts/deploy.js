const { ethers } = require('hardhat');
// address https://ropsten.etherscan.io/address/0xCC51E75E41288dCa0feE5D6982Bf966DF123ADcC#code
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  ethPool = await ethers.getContractFactory('EthPool');
  ethPool = await ethPool.deploy();
  await ethPool.deployed();
  console.log("EthPool contract address:", ethPool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });