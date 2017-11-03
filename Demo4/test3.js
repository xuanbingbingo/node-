// 反射，如何知道一个监听器何时被添加到一个emmiter上，或者查询现有的监听器（高级）

var emitter = new (require('events').EventEmitter)
emitter.on('newListener', function(name, listener){
    console.log('Event name added: %s', name)
})

emitter.on('a listener haha', function(){
    //a new listener
})

console.log(emitter.listeners('newListener').length)//查询监听器

