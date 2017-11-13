
//执行外部应用程序(通过数据缓存) execFile(不能使用回调)

var cp = require('child_process')

cp.execFile('echo', ['hello', 'world'], function(err, stdout, stderr){
    if(err) console.log(err)
    console.log('stdout', stdout)
    console.log('stderr', stderr)
})

//流和外部应用程序(通过流读取外部应用程序输出的数据) spawn

var child = cp.spawn('echo', ['hello', 'world'])
child.on('error', function(error){
    console.error(error)
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

//外部应用程序的串联调用 spawn

var cat = cp.spawn('cat', ['messy.txt'])
var sort = cp.spawn('sort')
var uniq = cp.spawn('uniq')

cat.stdout.pipe(sort.stdin)
sort.stdout.pipe(uniq.stdin)
uniq.stdout.pipe(process.stdout)

//在shell中执行命令 exec(可以使用回调)

cp.exec('cat messy.txt | sort | uniq', function(err, stdout, stderr){
    console.log(stdout)
})

cp.exec('ls', function(err, stdout, stderr){
    console.log(stdout)
})

//在unix平台下制作可执行文件

cp.execFile('./hello', ['bingo11'], function(err, stdout){
    console.log(stdout)
})

//使用fork进行父进程和子进程的通信
var child = cp.fork('./myChild', {slient: true})
child.on('message', function(msg){
    console.log('got a message from child', msg)
    child.disconnect()
})
child.send('sending a string')




