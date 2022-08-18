const { response } = require("express");
const {Shopping, Client} = require("../models");

const getClients = async (req, res = response) => {


    const [total, clients] = await Promise.all([
        Client.countDocuments(),
        Client.find()
    ])

    res.json({
        total,
        clients
    })

}

const postClient = async(req, res = response) =>{
    const body = req.body;
    console.log(body)
    const client = new Client(body)
    console.log(client)

    await client.save();

    res.status(201).json(client)

}
module.exports = {
    getClients,
    postClient
}