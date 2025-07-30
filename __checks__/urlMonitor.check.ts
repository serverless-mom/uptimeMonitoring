import { Frequency, UrlMonitor, UrlAssertionBuilder } from 'checkly/constructs'

new UrlMonitor('url-pinger-3', {
  frequency: Frequency.EVERY_10S,
  name: 'URL pinger 1',
  activated: true,
  request: {
    url: 'https://httpbin.org/get',
    skipSSL: false,
    followRedirects: true,
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ]
  }
}) 