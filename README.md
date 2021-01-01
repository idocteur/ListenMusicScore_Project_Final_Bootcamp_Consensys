# : The First Decentralized Application Music_Listen_Score
# :book: Intro 
Listen Music Score is system for scoring music fron users.
This application aims to put music online and which will control the number of listenings.The final goal of this innovation is to be able to subsequently develop a system which facilitates the price of rewards in relation to the number of listenings, sale and vote. For that other contract will be added in order to implement it in the muscical world.

Musictoken is a contract containining information about music like title duration and genre which  records all listening for every song for awards

The react front end is not finished yet, it will be functional in a next commit

To carry out this decentralized application, a "Music.sol "contract was developed to ensure the storage, the number of listening to music.

  
## :electric_plug: Prerequisites

- [Node.js](https://nodejs.org) 14.15.x
- [NPM](https://npm.org) 6.14.x
- [MetaMask](https://metamask.io/) 4.9.x
- [ganache-cli](https://github.com/trufflesuite/ganache-cli) 6.12.x `npm install -g ganache-cli`
- [Truffle](https://truffleframework.com/) 5.1.x `npm install -g truffle`

## :woman_technologist: Building & Running

1. Git clone this repo 

```bash
git clone https://github.com/idocteur/consensys-bootcamp-final-project.git
```

2. Go to the client folder in the project directory and then:

```bash
npm install
```

3. Using a different terminal window, run a private Ethereum network with Ganache CLI on `127.0.0.1:8545`:

```bash
ganache-cli
```

Note the mnemonic printed on startup, you will need it later.

4. Using a different terminal window, go to the project directory and compile and migrate the project contracts

```bash
truffle compile && truffle migrate
```

5. In your browser open Metamask, restore accounts from the ganache-cli (using the mnemonic printed on terminal) and set newtwork to Localhost 8545

6. Now back to the first terminal window, in the client folder, start the local server and go to `localhost:3000`

```bash
npm start
```  
The react front end is not finished yet, it will be functional in a next commit

## :triangular_flag_on_post: Testing

1. Go to the project directory and run:

```bash
truffle test
```
  
## :octocat: Disclaimer: 
This dApp was made with barely any previous web development skills, so there will be bugs! Be kind and patient going through it.
Feedback and improvement tips are always welcome :)

