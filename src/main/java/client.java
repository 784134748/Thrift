import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TFramedTransport;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;

/**
 * Created by listener on 16/11/11.
 */
public class client {

public static void main(String [] args) {
    try {
        TTransport transport = new TSocket("localhost", 8899);
        TProtocol protocol = new TBinaryProtocol(transport);
        UserService.Client client =new UserService.Client(protocol);
        transport.open();
        System.out.println("Starting Java_client on port 8899.....");
        System.out.print(client.adduname("张三"));
        transport.close();
    } catch (TException x) {
        x.printStackTrace();
    }
}
}
