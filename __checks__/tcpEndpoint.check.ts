import { TcpMonitor, TcpAssertionBuilder } from 'checkly/constructs'

new TcpMonitor('hello-tcp-2', {
  name: 'Hello TCP',
  activated: true,
  maxResponseTime: 5000,
  degradedResponseTime: 4000,
  request: {
    hostname: 'tcpbin.com',
    port: 4242,
    data: 'ping\n',
    ipFamily: 'IPv6',
    assertions: [
        TcpAssertionBuilder.responseTime().lessThan(1000),
        TcpAssertionBuilder.responseData().contains('ping')
    ]
  }
}) 