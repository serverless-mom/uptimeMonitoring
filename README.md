# Checkly Uptime Monitoring Demo

This example project shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow to perform uptime monitoring. 

## Installation

1. clone this repository
2. run `npm install`
3. Log in to your Checkly account wiht `npx checkly login`
3. do a test run with `npx checkly test` (only the TCP monitor and URL pinger will run, since the heartbeat monitor can't really run ad hoc)
4. preview a deploy to your account with `npx checkly deploy -p`

you should see an output like:

```bash
Create:
    HeartbeatMonitor: heartbeat-newsletter-2
    TcpMonitor: hello-tcp-2
    UrlMonitor: url-pinger-3
```

For more information, check the [reference documentation on Uptime Monitoring](https://www.checklyhq.com/docs/cli/constructs-reference/#uptime-monitors). 