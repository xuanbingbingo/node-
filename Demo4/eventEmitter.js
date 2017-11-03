var util = require('util')
var events = require('events')

function myClass () {
    events.EventEmitter.call(this)
}
util.inherits(myClass, events.EventEmitter)