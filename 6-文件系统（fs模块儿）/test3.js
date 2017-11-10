
var finder = require('./finder')
try {
    var results = finder.findSync(/.mkv/, '/Users/libin/Downloads')
    console.log(results)
} catch (error) { 
    console.error(error)
}