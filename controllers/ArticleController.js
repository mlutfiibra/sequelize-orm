const Model = require('../models').Articles
const View = require('../views')
const Sequelize = require("sequelize")
const Op = Sequelize.Op

class ArticleController {
    static add(input) {
        Model.create({
                title: input[0],
                body: input[1],
                authorId: input[2],
                tagId: input[3]
            })
            .then(result => {
                View.generateTable(result)
                process.exit()
            })
            .catch(err => {
                View.show(err)
                process.exit()
            })
    }

    static readAll() {
        Model.findAll()
            .then(result => {
                if (result.length === 0) throw (`Data kosong`)
                View.generateTable(result);
            })
            .catch(err => {
                View.show(err);
            })
    }

    static readOne(id) {
        Model.findByPk(id[0])
            .then(result => {
                if (result === null) throw (`Data tidak ditemukan`)
                View.show(result.dataValues)
            })
            .catch(err => {
                View.show(err)
            })
    }

    static findWhere(input) {
        Model.findOne({
                [input[0]]: input[1]
            })
            .then(result => {
                if (result === null) throw (`Data tidak ditemukan`)
                View.show(result.dataValues)
            })
            .catch(err => {
                View.show(err)
            })
    }

    static update(input) {
        Model.update({
                tittle: input[1],
                updateAt: new Date()
            }, {
                where: {
                    id: input[0]
                }
            })
            .then(result => {
                if (result === null) throw (`Data tidak ditemukan`)
                View.generateTable(result)
            })
            .catch(err => {
                View.show(err)
            })
    }

    static delete(id) {
        Model.destroy({
                where: {
                    id: id[0]
                }
            })
            .then(result => {
                if (result === null) throw (`Data tidak ditemukan`)
                View.show(result)
            })
            .catch(err => {
                View.show(err)
            })
    }

    static searchLike(input) {
        Model.findAll({
            where:{
                body: {
                    [Op.like]: `${input[0]}%`
                }
            }
        })
        .then(result=> {
            if(result.length===0) throw (`Tidak ada data yang cocok`)
            View.generateTable(result)
            process.exit()
        })
        .catch(err=> {
            View.show(err)
            process.exit()
        })
    }
}

module.exports = ArticleController