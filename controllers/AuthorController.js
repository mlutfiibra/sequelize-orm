const Model = require('../models').Authors
const View = require('../views')
const Sequelize = require("sequelize")
const Op = Sequelize.Op

const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

// const connection = new Sequelize(db, user, pass, { operatorsAliases });

class AuthorController {
    static add(input) {
        Model.create(
            {
                first_name: input[0],
                last_name: input[1],
                religion: input[2],
                gender: input[3],
                age: input[4],
                createdAt: new Date(),
                updateAt: new Date()
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
            View.generateTable(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
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

    static update(input){
        Model.update(
            {
                first_name: input[1],
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

    static ageUnder(age) {
        Model.findAll(
            {
                where : {
                    age : {
                        [Op.lte] : `${age[0]}`
                    }  
                }
            }
        )
        .then(result=>{
            if(result.length===0) throw (`Data tidak ditemukan`)
            View.generateTable(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }

    static ageOlder(age) {
        Model.findAll(
            {
                where : {
                    age : {
                        [Op.gte] : `${age[0]}`
                    }  
                }
            }
        )
        .then(result=>{
            if(result.length===0) throw (`Data tidak ditemukan`)
            View.generateTable(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }

    static ageIs(age) {
        Model.findAll(
            {
                where : {
                    age : {
                        [Op.eq] : `${age[0]}`
                    }  
                }
            }
        )
        .then(result=>{
            if(result.length===0) throw (`Data tidak ditemukan`)            
            View.generateTable(result)
            process.exit()
        })
        .catch(err=>{
            View.show(err)
            process.exit()
        })
    }
}

module.exports = AuthorController
