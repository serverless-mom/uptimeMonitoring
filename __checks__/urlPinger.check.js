import { UrlMonitor, UrlAssertionBuilder } from 'checkly/constructs'

new UrlMonitor('url-ping-1', {
  name: 'URL pinger 1',
  activated: true,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/v1/echo/get',
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ]
  }
})