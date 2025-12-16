

const mongoose = require('mongoose');
const companyModel = require('../models/companyModel');
const dotenv = require('dotenv').config()
const dbConnect = require('../database/db_mongoose');
dbConnect();

const banks = [
    "Phoenix Finance and Investments Ltd",
    "People's Leasing & Financial Services Ltd",
    "National Housing Finance & Investments Ltd",
    "National Finance Ltd",
    "MIDAS Financing Ltd",
    "Islamic Finance & Investment Ltd",
    "International Leasing & Financial Services Ltd",
    "IDCOL Ltd",
    "IPDC Ltd",
    "IIDFC Ltd",
    "bkash",
    "Nagad",
    "Pathao Pay",
    "Upay",
    "Rocket",
    "BRAC Bank Ltd",
    "Dutch-Bangla Bank Ltd",
    "Eastern Bank Ltd",
    "Prime Bank Ltd",
    "City Bank Ltd",
    "Standard Chartered Bank",
    "Sonali Bank Ltd",
    "Janata Bank Ltd",
    "Agrani Bank Ltd",
    "Bank Asia Ltd",
    "Mercantile Bank Ltd",
    "Mutual Trust Bank Ltd",
    "One Bank Ltd",
    "Pubali Bank Ltd",
    "South East Bank Ltd",
    "Trust Bank Ltd",
    "United Commercial Bank Ltd",
    "AB Bank Ltd",
    "IFIC Bank Ltd",
    "Jamuna Bank Ltd",
    "Meghna Bank Ltd",
    "NRB Bank Ltd",
    "NRB Commercial Bank Ltd",
    "NRB Global Bank Ltd",
    "Shahjalal Islami Bank Ltd",
    "Social Islami Bank Ltd",
    "Southeast Bank Ltd",
    "Standard Bank Ltd",
    "Premier Bank Ltd"
];

const addCompanies = async () => {
    try{
        await  companyModel.deleteMany({});
    const formatted = banks.map(name => ({ 
        name: name.trim(),
        totalReviews: 0,
        positiveCount: 0,
        negativeCount: 0,
        nutralCount: 0,
        reviews: []
    }));
     await companyModel.insertMany(formatted);
    console.log("Companies added successfully");
    process.exit();
    }catch (error) {
        console.log(error)
        process.exit(1);
    }
}

const deleteAllCompanies = async () => {
    try{ 
        await companyModel.deleteMany({});
        console.log("All companies deleted");
        process.exit();

    }catch (error) {
        console.log(error)
        process.exit(1);
    }

}

const run = async () => {
    const arg = process.argv[2];
    if (arg === '--add') {
        await addCompanies();
    } else if (arg === '--delete') {
        await deleteAllCompanies();
    } else {
        console.log("Invalid argument. Use --add to add companies or --delete to delete all companies.");
        process.exit(1);
    }
}

run();