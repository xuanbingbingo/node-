//实现一个可读流

//一个json行解析器

var fs = require('fs')
var stream = require('stream')
var util = require('util')

function JSONLineReader(source){
    stream.Readable.call(this)
    this._source = source
    this._findLineEnd = false
    this._buffer = ""
    source.on('readable', function(){
        this.read()
    }.bind(this))
}

util.inherits(JSONLineReader, stream.Readable)

JSONLineReader.prototype._read = function(size){
    var chunk;
    var line;
    var lineIndex;
    var result;
    // console.log(size)
    if(this._buffer.length === 0){
        chunk = this._source.read();
        this._buffer += chunk;
        console.log('a',this._buffer)
    }

    lineIndex = this._buffer.indexOf('n');

    if(lineIndex !== -1){
        line = this._buffer.slice(0, lineIndex);
        if(line) {
            result = JSON.parse(line);
            this._buffer = this._buffer.slice(lineIndex + 1)
            this.emit('object', result);
            this.push()
            // console.log('1')
            // console.log(this._buffer)
        }else{
            this._buffer = this._buffer.slice(1);
            // console.log('2')
            // console.log(this._buffer)
        }
    }
}

var input = fs.createReadStream(__dirname + "/test.txt", {
    encoding: 'utf8'
})

var jsonReader = new JSONLineReader(input)

jsonReader.on('object', function(obj){
    console.log('b', obj)
    // console.log('pos:', obj.position,'_letter:', obj.letter)
})
