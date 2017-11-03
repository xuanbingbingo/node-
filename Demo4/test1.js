//EventEmitter的继承方案

var util = require('util')
var EventEmitter = require('events').EventEmitter

function MusicPlayer () {
    this.playing = false
    EventEmitter.call(this) 
}
util.inherits(MusicPlayer, EventEmitter)

var AudioDevice = {
    play: function(song){
        console.log('正在播放音乐：' + song)
    },
    stop: function(){
        console.log('停止播放音乐')
    }
}
var musicPlayer = new MusicPlayer()

musicPlayer.on('play', function(song){
    this.playing = true
    AudioDevice.play(song)
})
musicPlayer.on('play', function(){
    console.log('一个触发事件可以触发多个监听事件')
})

musicPlayer.on('stop', function(){
    this.playing = false
    AudioDevice.stop()
})


musicPlayer.emit('play','小星星')
setTimeout(function(){
    musicPlayer.emit('stop')
},3000)

//删除监听器

// function play(track) {
//     this.playing = true
// }
// mysicPlayer.on('play', play)
// mysicPlayer.removeListener('play', play)
// mysicPlayer.removeAllListeners()

//一次性监听

// mysicPlay.once('play', function(){
//     console.log('play事件只能被出发一次')
// })