const View = require('../views')

class MainController {
    static help() {
        View.help();
    }

    static notFound() {
        View.notFound()
    }
}

module.exports = MainController
