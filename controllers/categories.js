const { response } = require("express");
const { Category } = require('../models')

// getCategories - paginado - total - populate

const getCategories = async (req, res = response) =>{

    const { limit = 5, from = 0 } = req.query;

    const [total, categories] = await Promise.all([
        Category.countDocuments({state:true}),
        Category.find({state:true})
        .skip(Number(from))
        .limit(Number(limit))
        .populate('createdBy', 'name')
    ])

    res.json({
        total,
        categories
    })

}
// getCategory - populate  - {}
const getCategory = async (req, res = response) =>{

    const { id } = req.params;
    console.log(id)

const category = await Category.findById(id)

res.json(category)

}

const updateCategory = async(req, res= response) =>{
    const {id} = req.params;

    const {state, user, ...data} = req.body;

    data.name = data.name.toUpperCase();
    data.user = req.user._id;

    const category = await Category.findByIdAndUpdate(id, data, {new: true})

    res.json(category);
}

const deleteCategory = async(req, res= response) =>{

    const {id} = req.params;
    const categoryDeleted = await Category.findByIdAndUpdate(id, {state: false}, {new:true})
    res.json({
        categoryDeleted
    })

}




const createCategory = async (req, res = response) => {

    const name = req.body.name.toUpperCase();

    const categoryDB = await Category.findOne({name});

    if (categoryDB) {
        return res.status(400).json({
            msg: `Category ${categoryDB.name} is already exist.`
        })
    }

    const data = {
        name,
        createdBy: req.user._id
    }

    const category = new Category(data);

    await category.save();

    res.status(201).json(category)

}

module.exports = {
    getCategory,
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
}