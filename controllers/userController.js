const {request , response} = require('express');

class userController{

    usersGets = (req = request, res = response) => {

        const { query } = req
        const {body} = req

        res.status(200).json({
           query,
           body
        })
    }
    
    usersPost = (req = request, res = response) => {

        const {name, posicion} = req.body;
        res.status(200).json({
            name,
            posicion
        })
    }
    usersPut = (req = request, res = response) => {

        const {id} = req.params
        const {reqType, message} = req.body
        res.status(200).json({
            id,
            reqType,
            message
        })
    }
    usersDelete = (req = request, res = response) => {
        const {id} =  req.params
        res.status(200).json({
            id,
            reqType: 'Delete',
            message:'User Controller',
            msg: `User con Id ${id} fue eliminado`
        })
    }
}

module.exports = userController;