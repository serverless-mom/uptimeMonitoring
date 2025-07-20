//In this bulk monitoring example we'll monitor 50 URLs from one file
//this will create 50 URL monitors in your Checkly dashboard

import { Frequency, UrlMonitor, UrlAssertionBuilder } from 'checkly/constructs'

//grepped a sitemap.xml file for an array of URLs

const sitemapUrls = [
  'https://www.checklyhq.com/',
  'https://www.checklyhq.com/blog/',
  'https://www.checklyhq.com/careers-v2/',
  'https://www.checklyhq.com/pricing-next-simple/',
  'https://www.checklyhq.com/redefine/',
  'https://www.checklyhq.com/spring-in-the-city/',
  'https://www.checklyhq.com/uptime/',
  'https://www.checklyhq.com/uptime-monitoring/',
  'https://www.checklyhq.com/webinars/',
  'https://www.checklyhq.com/pricing/',
  'https://www.checklyhq.com/react-summit-2025/',
  'https://www.checklyhq.com/raccoon-onboarding/',
  'https://www.checklyhq.com/careers-next/',
  'https://www.checklyhq.com/privacy/',
  'https://www.checklyhq.com/security/',
  'https://www.checklyhq.com/request-demo/',
  'https://www.checklyhq.com/kubecon-25/',
  'https://www.checklyhq.com/alternative-runscope/',
  'https://www.checklyhq.com/contact-sales/',
  'https://www.checklyhq.com/events/',
  'https://www.checklyhq.com/careers/',
  'https://www.checklyhq.com/detect/',
  'https://www.checklyhq.com/datadog-alternative/',
  'https://www.checklyhq.com/dynatrace-alternative/',
  'https://www.checklyhq.com/customers/',
  'https://www.checklyhq.com/new-relic-alternative/',
  'https://www.checklyhq.com/goto-amsterdam/',
  'https://www.checklyhq.com/slack/',
  'https://www.checklyhq.com/about/',
  'https://www.checklyhq.com/security-response/',
  'https://www.checklyhq.com/integrations/',
  'https://www.checklyhq.com/terms/',
  'https://www.checklyhq.com/checkly-and-monitoring-as-code-mac-earn-third-gartner/',
  'https://www.checklyhq.com/alternative-pingdom/',
  'https://www.checklyhq.com/why-monitoring-as-code/',
  'https://www.checklyhq.com/gartner-hype-cycles-2023/',
  'https://www.checklyhq.com/blog/tag/ai/',
  'https://www.checklyhq.com/blog/tag/prometheus/',
  'https://www.checklyhq.com/blog/tag/product/',
  'https://www.checklyhq.com/blog/tag/announcements/',
  'https://www.checklyhq.com/blog/tag/people/',
  'https://www.checklyhq.com/blog/tag/opentelemetry/',
  'https://www.checklyhq.com/blog/tag/community/',
  'https://www.checklyhq.com/blog/tag/checkly-event/',
  'https://www.checklyhq.com/blog/tag/open-source/',
  'https://www.checklyhq.com/blog/tag/mac/',
  'https://www.checklyhq.com/blog/tag/development/',
  'https://www.checklyhq.com/blog/tag/vuejs/',
  'https://www.checklyhq.com/blog/tag/terraform/',
  'https://www.checklyhq.com/blog/tag/security/'
]

//create paths and friendly names for each monitor

sitemapUrls.forEach((url, index) => {
  const urlPath = new URL(url).pathname.replace(/\//g, '-').replace(/^-+|-+$/g, '') || 'root'
  const monitorId = `checkly-${urlPath}-${index}`
  const monitorName = `Checkly ${urlPath.replace(/-/g, ' ')} Monitor`

//create each monitor with a five minute interval
  new UrlMonitor(monitorId, {
    frequency: Frequency.EVERY_5M,
    name: monitorName,
    activated: true,
    request: {
      url: url,
      skipSSL: false,
      followRedirects: true,
      assertions: [
        UrlAssertionBuilder.statusCode().equals(200),
      ]
    }
  })
})