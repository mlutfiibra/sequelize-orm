const argv = process.argv.slice(2)
const command = argv[0]
const option = argv.slice(1)
const parameter = option.slice(1)

const MainController = require('./controllers/MainController')
const AuthorController = require('./controllers/AuthorController')
const ArticleController = require('./controllers/ArticleController')
const TagController = require('./controllers/TagController')

switch (command) {
    case "author":
        switch (option[0]) {
            case "add":
                AuthorController.add(parameter)
                break
            case "read_all":
                AuthorController.readAll()
                break
            case "read_one":
                AuthorController.readOne(parameter)
                break
            case "update":
                AuthorController.update(parameter)
                break
            case "erase":
                AuthorController.delete(parameter)
                break
            case "find_where":
                AuthorController.findWhere(parameter)
                break
            case "age_under":
                AuthorController.ageUnder(parameter)
                break
            case "age_older":
                AuthorController.ageOlder(parameter)
                break
            case "age_is":
                AuthorController.ageIs(parameter)
                break
            default:
                MainController.notFound()
                break;
        }
        break
    case "article":
        switch (option[0]) {
            case "add":
                ArticleController.add(parameter)
                break
            case "read_all":
                ArticleController.readAll()
                break
            case "read_one":
                ArticleController.readOne(parameter)
                break
            case "update":
                ArticleController.update(parameter)
                break
            case "erase":
                ArticleController.delete(parameter)
                break
            case "search_like":
                ArticleController.searchLike(parameter)
                break
            default:
                MainController.notFound()
                break;
        }
        break
    case "tag":
        switch (option[0]) {
            case "add":
                TagController.add(parameter)
                break
            case "read_all":
                TagController.readAll()
                break
            case "read_one":
                TagController.readOne(parameter)
                break
            case "update":
                TagController.update(parameter)
                break
            case "erase":
                TagController.delete(parameter)
                break
            default:
                MainController.notFound()
                break;
        }
        break
    case "help":
        MainController.help()
        break
    default:
        MainController.notFound()
        break
}