const companyModel = require("../models/companyModel")

const getAllCompanies  = async (req , res ) => {
    try {
        const companies = await companyModel.find().sort({name: 1})
        res.status(200).json({
            status: 'success',
            results: companies.length,
            data: {
                companies
            }
        })
    }catch (error) {
        console.log(error)
    }
}

const createCompanie = async (req , res ) => {
    try{
        const companies = await companyModel.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                companies
            }
        })
    }catch (error) {
        console.log(error)
     
    }
}

const getAllCompaniesTotalStats = async (req , res ) => {
    try{
        const companies = await companyModel.find()
        const  totalCompanies = companies.length;

        const totalReviews = companies.reduce(
            (acc, c) => acc + (c.totalReviews || 0), 0
        );

        const totalComplaints = companies.reduce(
            (acc, c) => acc + (c.negativeCount || 0), 0
        );

        const averageComplaintRate = totalReviews === 0 ? 0 :
         ((totalCompanies / totalReviews) * 100).toFixed(2);

         const stats = {
            totalCompanies,
            totalReviews,
            averageComplaintRate : Number(averageComplaintRate),
            totalComplaints
         }

            res.status(200).json({
                status: 'success',
                data: {
                    stats
                }
            })

    }catch{
        console.log(error)

    }
}

const getCompaniesAllStats = async (req , res ) => {
    try{
        const {sort , page=1 , limit=10 , search=""} = req.query
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        const skip = (pageNumber -1) * limitNumber;

        let allCompanies = await companyModel.find({
            name: { $regex: search , $options: 'i' }
        }).lean();

    }catch (error) {
        console.log(error)
    }
}

module.exports = {getAllCompanies, createCompanie , getAllCompaniesTotalStats}