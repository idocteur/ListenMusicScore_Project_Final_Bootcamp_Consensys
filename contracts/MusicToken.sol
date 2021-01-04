// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title Musictoken 
/// @notice Create tokenized (ERC721) versions of properties music
contract MusicToken is ERC721, Ownable {

  address internal storeAddress;
  uint newMusicId;

  struct Music {
    string titre;
    string genre;
    uint duree;
    uint listens;
    address creator;
  }

  mapping (uint => Music) idToMusic;

  modifier onlyMusicOwner(uint _musicId) { require(ownerOf(_musicId) == msg.sender); _; }

  /// @dev Contract constructor calls ERC721 constructor and pass the name and symbol parameters
  constructor () public ERC721("Tokenized Musics", "TM") 
  {
    newMusicId = 0;
  }
  
  /// @param _address Deployed Music Store contract address
  function setStoreAddress(address _address) public onlyOwner {
    storeAddress = _address;
  }

  // @notice Create a new ERC721 Tokenized Music
  function createMusic(string memory titre, string memory genre, uint duree ) public {
    _createMusic(titre,genre,duree);
  }

  /// @notice Create a new ERC721 Tokenized Music
  function _createMusic(string memory _titre, string memory _genre,uint _duree) internal {
    newMusicId = newMusicId+1;
    idToMusic[newMusicId] = Music(_titre, _genre,_duree,0, msg.sender);
    _safeMint(msg.sender, newMusicId);
  }

  // @notice Add a new listen
  function setMusiclisten(uint MusicId) public onlyMusicOwner(MusicId) {
    require(storeAddress != address(0));
    setApprovalForAll(storeAddress, true);
    idToMusic[MusicId].listens += 1;
  }

 

  /// @notice Returns the name of a Music
  /// @param id The Id of the music/ERC721 
  /// @return titre returns the titref the music
  function getMusicTitre (uint id) external view returns (string memory) {
    return idToMusic[id].titre;
    
  }

  

  // @notice Returns the listens of a Music
  // @param id The Id of the product/ERC721 
  // @return price returns the price of a product
  function getMusicListens (uint id) external view returns (uint listens) {
    return idToMusic[id].listens;
  }

  /// @notice Returns the creator of a music
  /// @param id The Id of the musict/ERC721 
  /// @return creator returns the creator of a music
    function getMusicCreator (uint id) external view returns (address creator) {
    return idToMusic[id].creator;
  }
  
 

  /// @notice Returns the address registered for the marketplace
  /// @return storeAddress returns the address registered for the marketplace
  function getStoreAddress () external view returns (address) {
    return storeAddress;
  }

  /// @notice Returns true
  /// @dev This function is useful to confirm if the address passed to ProductStore.sol constructor is correct
  function isMusicToken() external pure returns (bool) { return true; }
}