async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("UniswapV2Router02");

// Without agruments, the contract
// const token = await Token.deploy();

  const token = await Token.deploy('0x9AF0f832c34D8D29004e99CAc4b5DC4F786d1470','0x0dE8FCAE8421fc79B29adE9ffF97854a424Cad09');
  await token.deployed();


  console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
