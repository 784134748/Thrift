import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.server.TThreadPoolServer;
import org.apache.thrift.transport.*;
import org.apache.thrift.server.TServer;
import org.apache.thrift.server.TServer.Args;
import org.apache.thrift.server.TSimpleServer;

public class server {

    private void start() {
        try {
            TServerSocket serverTransport = new TServerSocket(8899);
            UserService.Processor processor = new UserService.Processor(new UserServerHandler());
            TBinaryProtocol.Factory protFactory = new TBinaryProtocol.Factory(true, true);
            TServer server = new TThreadPoolServer(new TThreadPoolServer.Args(serverTransport).protocolFactory(protFactory).processor(processor));
            System.out.println("Starting Java_server on port 8899 ...");
            server.serve();
        } catch (TTransportException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String args[]){
        server srv = new server();
        srv.start();
    }

}