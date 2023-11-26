# Pellet Purchase Dapp

The Pellet Purchase Dapp is a decentralized application (Dapp) that enables users to buy high-quality pellets for cookstoves using cryptocurrency transactions.

## Description

The Pellet Purchase Dapp leverages blockchain technology to facilitate secure and transparent transactions for purchasing pellets. It provides an easy-to-use interface for users to select pellet options, enter the desired quantity, choose a payment method (cryptocurrency), and complete the purchase.

## Features

- Display available pellet options with images, names, descriptions, and prices per pellet.
- Input field for users to enter the quantity of pellets they want to purchase.
- Payment options limited to cryptocurrency for transactions.
- Checkout functionality to generate and complete the purchase of pellet tokens.

## Installation

To run the Pellet Purchase Dapp locally, follow these steps:


Run yarn or npm install to install all the required dependencies to run the dApp.

cd to packages
run npm start

smart contract submission
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CK is ERC20, Ownable {
 constructor() ERC20("Carbon Coin", "CK") Ownable(msg.sender) {
     _mint(msg.sender, 25 * 10**18); // This will mint 25 tokens to the contract deployer
 }

 function mint(address account, uint256 amount) public onlyOwner {
     _mint(account, amount);
 }

 function transfer(address from, address to, uint256 amount) public onlyOwner {
     _transfer(from, to, amount);
 }

 function burn(uint256 amount) public onlyOwner {
     _burn(msg.sender, amount);
 }

 function purchasePallet(address recipient, uint256 weight, uint256 price) public {
     require(weight == 50, "Valid weight"); // Check if the weight is 50kg
     require(price == 5, "Valid price"); // Check if the price is 5 cUSD

     // Reward 1 CK for each pallet purchased
     _mint(recipient, 1 * 10**18);
 }
}
![image](https://github.com/GeorginaMampuru/SupaMotoWallet/assets/66384787/42f5da9f-352a-44ff-be58-4e7c8982a73c)

