//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./xuser_types');
//HELPER FUNCTIONS AND STRUCTURES

UserService_add_args = function(args) {
  this.u = null;
  if (args) {
    if (args.u !== undefined && args.u !== null) {
      this.u = new ttypes.User(args.u);
    }
  }
};
UserService_add_args.prototype = {};
UserService_add_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.u = new ttypes.User();
        this.u.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_add_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_add_args');
  if (this.u !== null && this.u !== undefined) {
    output.writeFieldBegin('u', Thrift.Type.STRUCT, 1);
    this.u.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_add_result = function(args) {
};
UserService_add_result.prototype = {};
UserService_add_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_add_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_add_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_adduname_args = function(args) {
  this.uname = null;
  if (args) {
    if (args.uname !== undefined && args.uname !== null) {
      this.uname = args.uname;
    }
  }
};
UserService_adduname_args.prototype = {};
UserService_adduname_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uname = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_adduname_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_adduname_args');
  if (this.uname !== null && this.uname !== undefined) {
    output.writeFieldBegin('uname', Thrift.Type.STRING, 1);
    output.writeString(this.uname);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_adduname_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
UserService_adduname_result.prototype = {};
UserService_adduname_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_adduname_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_adduname_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_get_args = function(args) {
  this.uid = null;
  if (args) {
    if (args.uid !== undefined && args.uid !== null) {
      this.uid = args.uid;
    }
  }
};
UserService_get_args.prototype = {};
UserService_get_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_get_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_get_args');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserService_get_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.User(args.success);
    }
  }
};
UserService_get_result.prototype = {};
UserService_get_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.User();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_get_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_get_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
UserServiceClient.prototype = {};
UserServiceClient.prototype.seqid = function() { return this._seqid; }
UserServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
UserServiceClient.prototype.add = function(u, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_add(u);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_add(u);
  }
};

UserServiceClient.prototype.send_add = function(u) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_add_args();
  args.u = u;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_add = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_add_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
UserServiceClient.prototype.adduname = function(uname, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_adduname(uname);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_adduname(uname);
  }
};

UserServiceClient.prototype.send_adduname = function(uname) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('adduname', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_adduname_args();
  args.uname = uname;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_adduname = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_adduname_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('adduname failed: unknown result');
};
UserServiceClient.prototype.get = function(uid, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_get(uid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_get(uid);
  }
};

UserServiceClient.prototype.send_get = function(uid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid());
  var args = new UserService_get_args();
  args.uid = uid;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

UserServiceClient.prototype.recv_get = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_get_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get failed: unknown result');
};
UserServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
UserServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

UserServiceProcessor.prototype.process_add = function(seqid, input, output) {
  var args = new UserService_add_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.add.length === 1) {
    Q.fcall(this._handler.add, args.u)
      .then(function(result) {
        var result = new UserService_add_result({success: result});
        output.writeMessageBegin("add", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("add", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.add(args.u, function (err, result) {
      if (err == null) {
        var result = new UserService_add_result((err != null ? err : {success: result}));
        output.writeMessageBegin("add", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("add", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_adduname = function(seqid, input, output) {
  var args = new UserService_adduname_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.adduname.length === 1) {
    Q.fcall(this._handler.adduname, args.uname)
      .then(function(result) {
        var result = new UserService_adduname_result({success: result});
        output.writeMessageBegin("adduname", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("adduname", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.adduname(args.uname, function (err, result) {
      if (err == null) {
        var result = new UserService_adduname_result((err != null ? err : {success: result}));
        output.writeMessageBegin("adduname", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("adduname", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

UserServiceProcessor.prototype.process_get = function(seqid, input, output) {
  var args = new UserService_get_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.get.length === 1) {
    Q.fcall(this._handler.get, args.uid)
      .then(function(result) {
        var result = new UserService_get_result({success: result});
        output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("get", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.get(args.uid, function (err, result) {
      if (err == null) {
        var result = new UserService_get_result((err != null ? err : {success: result}));
        output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("get", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

