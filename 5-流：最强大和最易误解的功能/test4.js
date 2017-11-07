
// 实现一个可写流

var stream = require('stream')

GreenStream.prototype = Object.create(stream.Writable.prototype,{
    constructor: {value: GreenStream}
})

function GreenStream(options){
    stream.Writable.call(this, options)
}

GreenStream.prototype._write = function(chunk, encoding, callback){
    process.stdout.write('u001b[32m' + chunk + 'u001b[39m')
}

process.stdin.pipe(new GreenStream())

