const Table = require('cli-table');
const chalk = require('chalk');
const log = console.log;

class index {
    static showAll(data) {
        data.forEach(el => {
            console.log(el.dataValues);
        })
    }

    static show(data) {
        console.log(data);
    }

    static help() {
        console.log(
            `==== documentation ======================\nauthor add -> add<space> "data yang ingin dimasukan"\nauthor read_one -> read_one<space> "masukkan ud author"\nauthor read_all -> read_all\n==========================================`);
    }

    static notFound() {
        console.log(`Command not found`);
        this.help()
    }

    static generateTable(data) {
        let temp = []
        let keys = []
        let colWidths = []

        for (let key in data[0].dataValues) {
            keys.push(`${key}`)
        }

        keys.forEach(el => {
            colWidths.push(15)
        })

        const table = new Table({
            head: keys,
            colWidths: colWidths
        });

        data.forEach(el => {
            for (let key in el.dataValues) {
                temp.push(el.dataValues[key]);
            }
            table.push(temp)
            temp = []
        });

        log(chalk.white(table.toString()));
    }
}

module.exports = index