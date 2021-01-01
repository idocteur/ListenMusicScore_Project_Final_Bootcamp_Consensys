const MusicToken = artifacts.require("MusicToken");

contract("MusicToken", (accounts) => {
 let musicToken;
 let catchRevert = require("./exceptions.js").catchRevert;

 before("getting the contract instance", async () => {
     musicToken = await MusicToken.deployed();
 });

 describe("Creating a music and retrieving its info and ownership", async () => {
    before("create a music using accounts[1]", async () => {
      await musicToken.createMusic("Dekole", "Compas",300, { from: accounts[1] });
      expectedOwner = accounts[1];
      expectedTitre = "Dekole";
      expectedListens = 0;
      expectedCreator = accounts[1];
    });
   
    it("can fetch the address of an owner by music Id", async () => {
      const owner = await musicToken.ownerOf(1);
      assert.equal(owner, expectedOwner, "The owner of the music created should be the second account.");
    });

   it("can fetch the titre of a music by music Id", async () => {
    const titre = await musicToken.getMusicTitre(1);
    assert.equal(titre, expectedTitre, "The titre of the music should be the one provided by the creator.");
   });

   it("can add listen to music", async()=>{
     
   })

   it("can fetch the listen of a music by music Id", async () => {
    const listens = await musicToken.getMusicListens(1);
    assert.equal(listens, expectedListens, "The listens info of the music should be 0 after music creation.");
   });

   it("can fetch the creator of a music by music Id", async () => {
    const creator = await musicToken.getMusicCreator(1);
    assert.equal(creator, expectedCreator, "The creator of the music should be the second account.");
   });

 });


describe("Setting the store address.", async () => {
 before("set the store address using accounts[0]", async () => {
   await musicToken.setStoreAddress(accounts[9], { from: accounts[0] });
   expectedStoreAddress = accounts[9];
 });

it("the contract owner can set a store address", async () => {
 const storeAddress = await musicToken.getStoreAddress();
 assert.equal(storeAddress, expectedStoreAddress, "The store address should be the one set by contract owner.");
});

it("a non contract owner cannot set a store address", async () => {
  await catchRevert(musicToken.setStoreAddress(accounts[9], {from: accounts[2]}));
});
});
 })