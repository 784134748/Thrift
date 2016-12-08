import org.apache.thrift.TException;
/**
 * Created by listener on 16/11/12.
 */
public class UserServerHandler implements UserService.Iface{

        @Override
        public void add(User u) throws TException {
            System.out.print("正在进行添加用户操作");
        }

        @Override
        public String adduname(String uname) throws TException {
            return uname;
        }

        @Override
        public User get(String uid) throws TException {
            return null;
        }
    }
