/**
 * Created by listener on 16/11/10.
 */
var thrift=require("thrift");
var UserService=require('./gen-nodejs/UserService.js');
var ttypes=require('./gen-nodejs/xuser_types');


var users={};

var server=thrift.createServer(UserService,
    {
        add:function(user,callback){
            console.log("添加用户:",user.uname);
            users[user.uid]=user;
            console.log(users);
            callback(null,"回调数据");
        },
        adduname:function(str,callback){
            console.log("添加用户名",str);
            callback(null,"回调数据");
        },
        get:function(uid,callback){
            console.log("获得回调", uid);
            console.log(users[uid]);
            callback(null,users[uid]);
        }
    }
);

server.listen(8899);
console.log("Starting Node_server on port 8899....");

server.on("error",function(e){
    console.log(e);
});