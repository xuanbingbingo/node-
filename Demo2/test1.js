process.nextTick(function(){
    console.log('aaaa')
})
process.argv.forEach(function(val, index){
    console.log(val)
})
