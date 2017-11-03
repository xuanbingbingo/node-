// 混合EventEmitter而不是继承它

var EventEmitter = require('events').EventEmitter

function MusicPlayer () {
    this.playing = false
    for(var methodName in EventEmitter.prototype){
        this[methodName] = EventEmitter.prototype[methodName]
    }
}
