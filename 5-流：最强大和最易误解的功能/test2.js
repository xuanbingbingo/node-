//从基类继承流

var Readable = require('stream').Readable;

function MyStream(options) {
    Readable.call(this, options)//调用父类的构造函数，确保和它一样来传递任意的配置
}

MyStream.prototype = Object.create(Readable.prototype, {//也可用util.inherits来继承（效果一样）
    constructor: {value: MyStream}
})