# SolanaLearning

* Solana Blockchain learning and development

### Overview

* Projects available: 

### 1. Dummy token faucet

* The purpose of this project is to get a better understanding of how the native solana token program works. 

* Most important things to keep in mind: 

#### Token creation 

* You will need a **Token Program-owned Mint account** with a corresponding authority. You will have to provide the following: 
    * seeds
    * bump
    * decimals (to review if its default to 9 like the solana token)
    * authority

#### Minting tokens

* To mint tokens to an account we also need a **Token Program-owned account**, but this time it has to be a **Token account**.

