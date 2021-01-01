## 💡 Design Pattern Decisions
Here are listed some of design patterns applied in this project.

## Restricting Access

Modifiers are used to restrict access to functions in the smart contracts. Functions are public only when required. Some examples of these implementations:

1. The `MusicToken` contract inherits from `Open Zeppelin` `ERC-721` and `Ownable` and has the following access restrictions for its extended functions:
- `onlyOwner` modifier for `setStoreAddress` function - only the contract owner can register the contract address .







.