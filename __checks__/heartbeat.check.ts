import { HeartbeatCheck } from 'checkly/constructs'

new HeartbeatCheck('heartbeat-newsletter-2', {
  name: 'Send weekly newsletter job',
  period: 7,
  periodUnit: 'days',
  grace: 2,
  graceUnit: 'hours',
})