import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@statespace/hardhat-testgen"

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      initialDate: new Date(0).toISOString(), // 1970-01-01T00:00:00.000Z
    }
  },
  testgen: {
    settings: {
      deterministic: ["time"],
    }
  }
};

export default config;
