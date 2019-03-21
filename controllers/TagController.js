const Model = require('../models').Tags
const View = require('../views')
const Sequelize = require("sequelize")
const Op = Sequelize.Op

class TagController {
    static add(input) {
        Model.create(
            {
                name: input[0]
            } 
        )
        .then(result=>{
            View.show(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }

    static readAll() {
        Model.findAll()
        .then(result=>{
            if(result.length===0) throw (`Data kosong`)
            View.generateTable(result);
            process.exit()
        })
        .catch(err=>{
            View.show(err);
            process.exit()
        })
    }

    static readOne(id) {
        Model.findByPk(id[0])
        .then(result=>{
            if(result===null) throw (`Data tidak ditemukan`)
            View.show(result.dataValues)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }

    static update(input){
        Model.update(
            {
                name: input[1],
                updateAt: new Date()
            },
            {where: {id:input[0]}}
        )
        .then(result=>{
            if(result===null) throw (`Data tidak ditemukan`)
            View.show(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }

    static findWhere(input) {
        Model.findOne(
            {
                where: {[input[0]] : input[1]}
            }
        )
        .then(result=>{
            if(result===null) throw (`Data tidak ditemukan`)
            View.show(result.dataValues)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }

    static delete(id) {
        Model.destroy(
            {
                where: {
                    id: id[0]
                }
            }
        )
        .then(result=>{
            if(result===null) throw (`Data tidak ditemukan`)
            View.show(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }
}

module.exports = TagController
