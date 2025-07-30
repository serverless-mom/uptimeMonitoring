//In this bulk monitoring example we'll monitor URLs from urlArray.json
//this will create URL monitors in your Checkly dashboard

import { Frequency, UrlMonitor, UrlAssertionBuilder } from 'checkly/constructs'
import * as fs from 'fs'
import * as path from 'path'

//load URLs from urlArray.json file
const urlArrayPath = path.join(__dirname, 'urlArray.json')
const sitemapUrls = JSON.parse(fs.readFileSync(urlArrayPath, 'utf8'))

//create paths and friendly names for each monitor

sitemapUrls.forEach((url, index) => {
  const urlPath = new URL(url).pathname.replace(/\//g, '-').replace(/^-+|-+$/g, '') || 'root'
  const monitorId = `siteMap-${urlPath}-${index}`
  const monitorName = `${urlPath.replace(/-/g, ' ')} Monitor`

//create each monitor with a five minute interval
  // new UrlMonitor(monitorId, {
  //   frequency: Frequency.EVERY_5M,
  //   name: monitorName,
  //   activated: true,
  //   request: {
  //     url: url,
  //     skipSSL: false,
  //     followRedirects: true,
  //     assertions: [
  //       UrlAssertionBuilder.statusCode().equals(200),
  //     ]
  //   }
  // })
})