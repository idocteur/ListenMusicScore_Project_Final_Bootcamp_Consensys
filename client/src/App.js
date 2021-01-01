import React, { Component } from "react";
import MusicTokenArtifact from "./contracts/MusicToken.json";
import getWeb3 from "./getWeb3"
//import { Text, Button, Box, Flex, Form, Input, Heading, Field, Select, ToastMessage, Blockie} from 'rimble-ui';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: undefined,
      account: undefined, 
      musictoken: undefined,
      store: undefined,
      biofund: undefined,
      owner: undefined, 
      firstBioFundOwner: undefined, 
      secondBioFundOwner: undefined, 
      thirdBioFundOwner: undefined,
      biofundBalance: 0,
      newProductName: "",
      newProductBio: true,
      newSaleId: 1,
      newSalePrice: 0,
      newPurchaseId: 1,
      productsOwned: [],
      sellOptions: [],
      buyOptions: [],
      infoOptions: [],
      newStore: "",
      newProductToken: "",
      newBioFund: "",
      newTxAddress: "",
      newTxValue: 0,
      idForApproval: 0,
      idToRevoke: 0,
      idToExecute: 0,
      idForInfo: 1,
      txIdForInfo: 0
    }
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MusicTokenArtifact.networks[networkId];
      const _musictoken = new web3.eth.Contract(
        MusicTokenArtifact.abi,
        deployedNetwork.address,
      );

      // const otherdeployedNetwork = productStoreArtifact.networks[networkId];
      // const _store = new web3.eth.Contract(
      //   productStoreArtifact.abi,
      //   otherdeployedNetwork.address,
      // );

      // const anotherdeployedNetwork = multisigBioFundArtifact.networks[networkId];
      // const _biofund = new web3.eth.Contract(
      //   multisigBioFundArtifact.abi,
      //   anotherdeployedNetwork.address,
      // );
    
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get state variables
      const _account = web3.utils.toChecksumAddress(accounts[0]);
      // const _owner = web3.utils.toChecksumAddress(await _store.methods.owner().call());
      // const _firstBioFundOwner = web3.utils.toChecksumAddress(await _biofund.methods.owners(0).call());
      // const _secondBioFundOwner = web3.utils.toChecksumAddress(await _biofund.methods.owners(1).call());
      // const _thirdBioFundOwner = web3.utils.toChecksumAddress(await _biofund.methods.owners(2).call());
      // const _biofundBalance = await web3.eth.getBalance(_biofund.options.address);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        web3: web3,
        account: _account,
        musictoken: _musictoken,
        owner: _owner,
      });
      this.decideHowToLoad();

      window.ethereum.on('accountsChanged',  (accounts) => {
        const _account = web3.utils.toChecksumAddress(accounts[0]);
        this.setState({ account: _account });
        this.decideHowToLoad()});

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  decideHowToLoad() {
    document.getElementById("productInfo").style.display = 'none';
      switch (this.state.account) {
        case this.state.owner:
          this.loadForOwner();
          break;
        case this.state.firstBioFundOwner: 
          this.loadForMultisig();       
          break;
        case this.state.secondBioFundOwner: 
          this.loadForMultisig();       
          break;
        case this.state.thirdBioFundOwner: 
          this.loadForMultisig();       
          break;
        default: 
          this.loadForUser();
      }
    }

  loadForOwner = async () => {
    document.getElementById("store").style.display = 'none';
    document.getElementById("ownerOnly").style.display = 'block';
    document.getElementById("multisigOwners").style.display = 'none';
  }

  loadForUser = async () => {
    document.getElementById("store").style.display = 'block';
    document.getElementById("ownerOnly").style.display = 'none';
    document.getElementById("multisigOwners").style.display = 'none';
    this.refreshUserBalance();
  }

  loadForMultisig = async () => {
    document.getElementById("store").style.display = 'none';
    document.getElementById("ownerOnly").style.display = 'none';
    document.getElementById("multisigOwners").style.display = 'block';
    document.getElementById("transactionInfo").style.display = 'none';
    this.refreshMultiSigBalance();
  }

  setStatus = (message) => {
    document.getElementById("status").innerHTML = message;
  }

  refreshUserBalance = async () => {
    //show metamask account
    document.getElementsByClassName("user")[0].innerHTML = this.state.account;
    //show ERC-721 balance 
    document.getElementsByClassName("balance")[0].innerHTML = balance;
    //show total ERC-721 supply
    document.getElementsByClassName("supply")[0].innerHTML = supply;
    //show ERC-721 owned by user and show options on put on sale
    this.getAllProductsFromOwner(this.state.account);
    //show eth balance in store contract
    const ethBalance = await this.state.store.methods.checkEthBalance().call({from: this.state.account});
    document.getElementsByClassName("ethBalance")[0].innerHTML = ethBalance;
    //show options to buy and for info
    this.getAllProductsForSale();
  }

  refreshMultiSigBalance = async () => {
      document.getElementById("bioFundBalance").innerHTML = this.state.biofundBalance;
      this.getTransactionInfo();
  }

  handleSetStoreAddress = async (event) => {
    console.log('reached setStoreAddress' + event)
    if (typeof this.state.musictoken !== 'undefined') {
      event.preventDefault();
      await this.state.musictoken.methods.setStoreAddress(this.state.newStore).send({from: this.state.account})
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("New store contract registered!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
  }

  handleCreateMusic = async (event) => {
    console.log('reached createdProduct' + event)
    if (typeof this.state.musictoken !== 'undefined') {
      event.preventDefault();
      await this.state.musictoken.methods.createProduct(this.state.newProductName,this.state.newProductBio).send({from: this.state.account})
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Product Created!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshUserBalance();
  }

  handleSetProductForSale = async (event) => {
    console.log('reached setProductForSale' + event)
    if (typeof this.state.musictoken !== 'undefined') {
      event.preventDefault();
      await this.state.musictoken.methods.setProductForSale(this.state.newSaleId, this.state.newSalePrice).send({from: this.state.account})
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Product on Sale!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshUserBalance();
  }

  getProductInfo = async () => { 
    document.getElementById("productInfo").style.display = 'block';
    try {
      //get product owner
      const productOwner = await this.state.musictoken.methods.ownerOf(this.state.idForInfo).call();
      document.getElementById("_ownerOf").innerHTML = productOwner;
      //get product name
      const productName = await this.state.musictoken.methods.getProductName(this.state.idForInfo).call();
      document.getElementById("_name").innerHTML = productName;
      //is product bio
      const productBio = await this.state.musictoken.methods.isProductBio(this.state.idForInfo).call();
      document.getElementById("_bio").innerHTML = productBio;
      //get product creator
      const productCreator = await this.state.musictoken.methods.getProductCreator(this.state.idForInfo).call();
      document.getElementById("_creator").innerHTML = productCreator;
      //is product for sale
      const productSale = await this.state.musictoken.methods.isProductForSale(this.state.idForInfo).call();
      document.getElementById("_forSale").innerHTML = productSale;
      //get product price
      const productPrice = await this.state.musictoken.methods.getProductPrice(this.state.idForInfo).call();
      document.getElementById("_price").innerHTML = productPrice;
      } catch (error) {
        document.getElementById("productInfo").innerHTML = "This product doesn't exist";
      }
  }

  getAllProductsFromOwner = async () => { 
    const supply =  await this.state.musictoken.methods.totalSupply().call();
    var _productsOwned = [];
    var _sellOptions = [];

    for ( var id=1; id<=supply; id++ ) {
      const _productOwner = await this.state.musictoken.methods.ownerOf(id).call();
      if ( _productOwner === this.state.account ) {
        _productsOwned.push(id); //show products list on welcome statement
        _sellOptions.push({value: id, label: id});
      }
    }
    this.setState({productsOwned: _productsOwned, sellOptions: _sellOptions});
    if (_productsOwned.length === 0) {
      document.getElementById("products").innerHTML = "You don't own any product yet. Go create or buy your first one!";

    } else {
      document.getElementById("products").innerHTML = _productsOwned;
    }
  }

  getAllProductsForSale = async () => { 
    const supply =  await this.state.musictoken.methods.totalSupply().call();
    var _buyOptions = [];
    var _infoOptions = [];
    for ( var id=1; id<=supply; id++ ) {
      _infoOptions.push({value: id, label: id});
      if ( await this.state.musictoken.methods.isProductForSale(id).call() ) {
        _buyOptions.push({value: id, label: id});
      }
    }
    this.setState({buyOptions: _buyOptions, infoOptions: _infoOptions});
  }

  handleSetNewProductContract = async (event) => {
    console.log('reached setNewProductContract' + event)
    if (typeof this.state.store !== 'undefined') {
      event.preventDefault();
      await this.state.store.methods.setNewProductContract(this.state.newProductToken).send({from: this.state.account})
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("New Product Contract registered!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
  }

  handleSetBiodiversityFund = async (event) => {
    console.log('reached setBiodiversityFund' + event)
    if (typeof this.state.store !== 'undefined') {
      event.preventDefault();
      await this.state.store.methods.setBiodiversityFund(this.state.newBioFund).send({from: this.state.account})
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("New Biodiversity Fund registered!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
  }

  handleBuyProduct = async (event) => {
    console.log('reached buyProduct' + event)
    if (typeof this.state.store !== 'undefined') {
      event.preventDefault();
      const _price = await this.state.musictoken.methods.getProductPrice(this.state.newPurchaseId).call();
      await this.state.store.methods.buyProduct(this.state.newPurchaseId).send({from: this.state.account, value: _price});
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Congrats! You just bought a product!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshUserBalance();
  }

  handleUserWithdraw = async (event) => {
    console.log('reached userWithdraw' + event)
    if (typeof this.state.store !== 'undefined') {
      event.preventDefault();
      const _ethBalance = await this.state.store.methods.checkEthBalance().call({from: this.state.account});
      await this.state.store.methods.withdraw(_ethBalance).send({from: this.state.account});
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Congrats! You just bought a product!", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshUserBalance();
  }

  handleSubmitTransaction = async (event) => {
    console.log('reached submitTransaction' + event)
    if (typeof this.state.biofund !== 'undefined') {
      event.preventDefault();
      await this.state.biofund.methods.submitTransaction(this.state.newTxAddress, this.state.newTxValue, "00").send({from: this.state.account});
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Transaction submitted for approval", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshMultiSigBalance();
  }

  handleApproveTransaction = async (event) => {
    console.log('reached approveTransaction' + event)
    if (typeof this.state.biofund !== 'undefined') {
      event.preventDefault();
      await this.state.biofund.methods.confirmTransaction(this.state.idForApproval).send({from: this.state.account});
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Transaction Approved", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshMultiSigBalance();
  }

  handleRevokeApproval = async (event) => {
    console.log('reached revokeApproval' + event)
    if (typeof this.state.biofund !== 'undefined') {
      event.preventDefault();
      await this.state.biofund.methods.revokeConfirmation(this.state.idToRevoke).send({from: this.state.account});
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Transaction Approved", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshMultiSigBalance();
  }

  handleExecuteTransaction = async (event) => {
    console.log('reached revokeTransaction' + event)
    if (typeof this.state.biofund !== 'undefined') {
      event.preventDefault();
      await this.state.biofund.methods.executeTransaction(this.state.idToExecute).send({from: this.state.account});
    }
    this.setStatus("Initiating transaction... (please wait)");
    window.toastProvider.addMessage("Transaction Executed", {
      variant: "success"
    })
    this.setStatus("Transaction complete!");
    this.refreshMultiSigBalance();
  }

  getTransactionInfo = async () => { 
    document.getElementById("transactionInfo").style.display = 'block';
    try {
      //get transaction destination
      const txDestination = await this.state.biofund.methods.getTransactionDestination(this.state.txIdForInfo).call();
      document.getElementById("_txDestination").innerHTML = txDestination;
      //get transaction value
      const txValue = await this.state.biofund.methods.getTransactionValue(this.state.txIdForInfo).call();
      document.getElementById("_txValue").innerHTML = txValue;
      //get if transaction is executed
      const txExecuted = await this.state.biofund.methods.isTransactionExecuted(this.state.txIdForInfo).call();
      document.getElementById("_txExecuted").innerHTML = txExecuted;
      //get if user has already confirmed
      const txUserConfirm = await this.state.biofund.methods.hasUserConfirmed(this.state.txIdForInfo).call({from: this.state.account});
      document.getElementById("_txUserConfirm").innerHTML = txUserConfirm;
    } catch (error) {
      document.getElementById("transactionInfo").innerHTML = "This product doesn't exist";
      }
  }

  // Handle form data change
  handleChange = (event) => {
    switch(event.target.name) {
        case "newProductName":
            this.setState({"newProductName": event.target.value})
            break;
        case "newProductBio":
            this.setState({"newProductBio": event.target.value})
            break;
        case "newSaleId":
          this.setState({newSaleId: event.target.value})
            break;
        case "newSalePrice":
          this.setState({newSalePrice: event.target.value})
            break;
        case "newPurchaseId":
            this.setState({"newPurchaseId": event.target.value})
            break;
        case "newStore":
            this.setState({"newStore": event.target.value})
            break;
        case "newProductToken":
            this.setState({"newProductToken": event.target.value})
            break;
        case "newBioFund":
            this.setState({"newBioFund": event.target.value})
            break;
        case "newTxAddress":
            this.setState({"newTxAddress": event.target.value})
            break;
        case "newTxValue":
            this.setState({"newTxValue": event.target.value})
            break;
        case "idForApproval":
            this.setState({"idForApproval": event.target.value})
            break;
        case "idToRevoke":
            this.setState({"idToRevoke": event.target.value})
            break;
        case "idToExecute":
            this.setState({"idToExecute": event.target.value})
            break;
        case "idForInfo":
            this.setState({"idForInfo": event.target.value}, () => {
              this.getProductInfo()
          });
            break;
        case "txIdForInfo":
            this.setState({"txIdForInfo": event.target.value}, () => {
              this.getTransactionInfo()
          });
            break;
        default:
            break;
    }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div bg="#8FC7E8" border='3px solid' borderColor="DarkCyan">
          <br/>
          <h1> BioPlace </h1>
          <span style="font-weight=bold"> The First Decentralized Nagoya Protocol-Compliant Marketplace </span>
          <br/>
      </div>

      <div>
           <p id="status"></p>
      </div>

      <div id="store">
        <div fontSize={1} textAlign='left'>
          <div width={1 / 20}></div>
          <div id="blockie" width={1 / 20}>
          </div>
          <div width={1 / 5}>
              Hey, <strong className="user">loading...</strong>! <br/>
              You currently own <strong className="balance">loading...</strong> of all <strong className="supply">loading...</strong> Tokenized Biodiversity Products. <br/>
              The products you own are: <strong id="products">loading...</strong> <br/>
              Balance in the store is: <strong className="ethBalance">loading...</strong> wei.
            <button size="small" mainColor="DarkCyan" value="submit" onClick={this.handleUserWithdraw}>Withdraw</button>
          </div>
          <div width={1 / 5}></div>
          <div width={1 / 5}>
          <div label="Check info on a product:">
            <select type="text" name="idForInfo" placeholder="e.g. 10" required={true} onChange={this.handleChange} options={this.state.infoOptions} />
          </div>
          </div>
          <div width={1 / 20}></div>
          <div width={1 / 5}>
            <p id="productInfo">
              Product name: <strong id="_name">loading...</strong> <br/>
              Is it biodiversity based? <strong id="_bio">loading...</strong> <br/>
              Product's original creator: <strong id="_creator">loading...</strong> <br/>
              Is it for sale? <strong id="_forSale">loading...</strong> <br/>
              Product's price: <strong id="_price">loading...</strong> <br/>
              Product's curent owner: <strong id="_ownerOf">loading...</strong> <br/>
            </p>
          </div>
          <div width={1 / 5}></div>
        </div>
        <br/><br/>
          <div fontSize={1}>
          <div width={1 / 40}></div>
            <div bg="#8FC7E8" p={3} width={1 / 3} border='3px solid' borderColor="DarkCyan"> 
              <h1> Create a new tokenized biodiversity product </h1>
                <form>
                  <div>
                    <div label="Enter your product name:">
                      <input type="text" placeholder="e.g. Palm Oil" required={true} name="newProductName" value={this.state.newProductName} onChange={this.handleChange}/>
                    </div>
                  </div>

                  <div>
                  <div label="Is it biodiversity based?">
                  <select required={true} name="newProductBio" value={this.state.newProductBio} onChange={this.handleChange} options={[ {value: "true", label: "Yes"}, {value: "false", label: "No"} ]}/>
                  </div>
                  </div>

                  <div>
                    <button size="medium" mainColor="#074F9A" value="submit" onClick={this.handleCreateMusic}>Create Product</button>
                  </div>
                </form>
            </div>
            <div width={1 / 40}></div>
            <div p={3} width={1 / 3} bg="#8FC7E8" border='3px solid' borderColor="DarkCyan">
              <h1> Put your tokenized biodiversity products on sale </h1>
                <form>
                  <div>
                    <div label="Choose the product you want to sell">
                    <select required={true} name="newSaleId" value={this.state.newSaleId} onChange={this.handleChange} options={this.state.sellOptions} />
                    </div>
                  </div>
                  <div>
                    <div label="For how much you want to sell it? Price in wei.">
                      <input type="text" placeholder="e.g. 1000" required={true} name="newSalePrice" value={this.state.newSalePrice} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    <button size="medium" mainColor="#074F9A" value="submit" onClick={this.handleSetProductForSale}>Sell Product</button>
                  </div>
                </form>
            </div>
            <div width={1 / 40}></div>
            <div bg="#8FC7E8" border='3px solid' borderColor="DarkCyan" p={3} width={1 / 3}>
              <h1> Buy a tokenized product </h1>
                <form>
                <div>
                  <div label="Choose the product you want to buy">
                  <select required={true} name="newPurchaseId" value={this.state.newPurchaseId} onChange={this.handleChange} options={this.state.buyOptions} />
                  </div>
                  </div>

                  <div>
                    <button size="medium" mainColor="#074F9A" value="submit" onClick={this.handleBuyProduct}>Buy Product</button>
                  </div>
                </form>
            </div>
            <div width={1 / 40}></div>
          </div>
      </div>

<div id="ownerOnly">
          <div>
            <div p={3} width={1 / 3}>
              <h1> Register store's contract </h1>
                <form>
                <div>
                  <div label="Paste the Store Contract Address here:">
                  <input type="text" placeholder="e.g. 0xdebeaac00deab8c047efbcd8a4bde696f1b890da" required={true} name="newStore" value={this.state.newStore} onChange={this.handleChange}/>
                  </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleSetStoreAddress}>Set Store Address</button>
                  </div>
                </form>
            </div>

            <div p={3} width={1 / 3}>
              <h1> Register new Product Token contract </h1>
                <form>
                <div>
                  <div label="Paste the new product token address here:">
                  <input type="text" placeholder="e.g. 0xb4D62D88C226C9E91D617eEd660BFF3043eBAB78" required={true} name="newProductToken" value={this.state.newProductToken} onChange={this.handleChange}/>
                  </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleSetNewProductContract}>Set New Product Contract</button>
                  </div>
                </form>
            </div>

            <div p={3} width={1 / 3}>
              <h1> Register Biodiversity Fund contract </h1>
                <form>
                <div>
                  <div label="Paste the new Biodiversity Fund address here:">
                  <input type="text" placeholder="e.g. 0x5762B0e08D5636E46709f7543840f8B98B89fdF3" required={true} name="newBioFund" value={this.state.newBioFund} onChange={this.handleChange}/>
                  </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleSetBiodiversityFund}>Set New BioFund Contract</button>
                  </div>
                </form>
            </div>
          </div>
</div>

<div id="multisigOwners">
          <div>
            <div width={1 / 20}></div>
            <div width={1 / 20}></div>
            <div width={1 / 5}>
              <legend className="welcome">BioFund Balance</legend>
              Current balance in Biodiversity Contract: <strong id="bioFundBalance">loading...</strong> .
            </div>
            <div width={1 / 5}></div>
            <div width={1 / 5}>
              <div label="Check info on a transaction:">
                <input type="text" name="txIdForInfo" placeholder="e.g. 10" required={true} onChange={this.handleChange}/>
              </div>
            </div>
            <div width={1 / 20}></div>
            <div width={1 / 5}>
              <p id="transactionInfo">
                  Where the money is being sent to: <strong id="_txDestination">loading...</strong> <br/>
                  How much money is being sent: <strong id="_txValue">loading...</strong> <br/>
                  Has the transaction already been executed? <strong id="_txExecuted">loading...</strong> <br/>
                  Did a approve this transaction already? <strong id="_txUserConfirm">loading...</strong> 
              </p>
            </div>
            <div width={1 / 5}></div>
          </div>

          <div>
            <div p={3} width={1 / 4}>
              <h1> Submit Transaction for Approval </h1>
                <form>
                  <div>
                    <div label="Paste the transaction destination address here:">
                    <input required={true} name="newTxAddress" placeholder="e.g. 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae" value={this.state.newTxAddress} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    <div label="Write the transaction value here:">
                    <input required={true} name="newTxValue" placeholder="e.g. 1000" value={this.state.newTxValue} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleSubmitTransaction}>Submit Transaction</button>
                  </div>
                </form>
            </div>
            <div p={3} width={1 / 4}>
              <h1> Approve proposed transaction </h1>
                <form>
                  <div>
                    <div label="Write the id of the transaction you want to approve:">
                    <input required={true} name="idForApproval" placeholder="e.g. 1" value={this.state.idForApproval} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleApproveTransaction}>Approve Transaction</button>
                  </div>
                </form>
            </div>
            <div p={3} width={1 / 4}>
              <h1> Revoke approval for transaction </h1>
                <form>
                  <div>
                    <div label="Write the id of the transaction you want to revoke:">
                    <input required={true} name="idToRevoke" placeholder="e.g. 1" value={this.state.idToRevoke} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleRevokeApproval}>Revoke Approval</button>
                  </div>
                </form>
            </div>
            <div p={3} width={1 / 4}>
              <h1> Execute transaction </h1>
                <form>
                  <div>
                    <div label="Write the id of the transaction you want to execute:">
                    <input required={true} name="idToExecute" placeholder="e.g. 1" value={this.state.idToExecute} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div>
                    <button value="submit" onClick={this.handleExecuteTransaction}>Execute Transaction</button>
                  </div>
                </form>
            </div>
          </div>
</div>

<br/>
<p> Developed by <strong>@bschorchit</strong> during <strong>Consensys Blockchain Developer Bootcamp</strong> </p>

      </div>
  
    );
  }
}

export default App;