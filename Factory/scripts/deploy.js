async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("UniswapV2Factory");

// Without agruments, the contract
// const token = await Token.deploy();

  const token = await Token.deploy('0x05d3D67dd175E2e1C8b80F3367D5c2B1D6adfc1b');
  await token.deployed();


  console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
