var readStream = require('fs').createReadStream("./file.txt")
readStream.on('end',function(){
    console.log('读取结束')
})
readStream.on('data',function(data){
    process.stdout.write(data)
})