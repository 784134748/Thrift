/**
 * Created by listener on 16/11/10.
 */
var thrift =require('thrift');


var UserService = require('./gen-nodejs/UserService.js');
var ttypes = require('./gen-nodejs/xuser_types');



var connection = thrift.createConnection("localhost", 8899);
var client = thrift.createClient(UserService, connection);
console.log("Starting Node_client on port 8899.....")

connection.on("error",function(e)
{
    console.log(e);
});


var x=new ttypes.User({
    uid:'001',
    uname:'test',
    usex:0,
    uage:'18'
});




client.add(x,function(err, res){
    client.get('112',function(err, res){
        if (err) {
            console.error(err);
        } else {
            console.log("Res:",res);
            connection.end();
        }
    });
    client.adduname('112',function(err, res){
        if (err) {
            console.error(err);
        } else {
            console.log("Res:",res);
            connection.end();
        }
    });
});
