
var assert = require('assert')
var countStream = new (require('./countstream'))('example')
var fs = require('fs')
var passed = 0

countStream.on('total', function(count){
    assert.equal(count, 2)
    passed++;
})

fs.createReadStream('./test.txt').pipe(countStream)

process.on('exit', function(){
    console.log('Assertions passed:', passed)
})