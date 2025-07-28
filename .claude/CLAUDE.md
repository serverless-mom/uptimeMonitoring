# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Checkly uptime monitoring demo project that demonstrates monitoring as code (MaC) workflows. It uses the Checkly CLI to create and manage uptime monitors for websites, TCP endpoints, and heartbeat checks.

## Essential Commands

### Setup and Installation
```bash
npm install
npx checkly login
```

### Testing and Deployment
```bash
npx checkly test          # Run checks locally 
npx checkly deploy -p     # Preview deployment changes
npx checkly deploy        # Deploy monitors to Checkly account
```

## Code Architecture

### Configuration
- **checkly.config.ts**: Main configuration file defining project settings, default check parameters, and runtime configuration
  - Project runs checks every 120 minutes by default
  - Uses US East and EU West data centers
  - Check files match pattern `**/__checks__/**/*.check.ts`
  - Runtime ID: 2025.04

### Monitor Types
The project demonstrates three types of Checkly monitors:

1. **HeartbeatCheck** (`__checks__/heartbeat.check.ts`): Monitors periodic jobs/cron tasks
   - Expects a ping within a specified time period and grace window
   - Example: Weekly newsletter job with 7-day period and 2-hour grace

2. **TcpMonitor** (`__checks__/tcpEndpoint.check.ts`): Monitors TCP endpoints
   - Tests raw TCP connections with custom data payloads
   - Includes response time and data content assertions

3. **UrlMonitor** (`__checks__/urlMonitor.check.ts`): Monitors HTTP endpoints
   - Standard HTTP/HTTPS uptime monitoring
   - Configurable frequency, SSL settings, redirects, and assertions

### Bulk Monitoring
- **examples/sitemapMonitors.check.ts**: Demonstrates bulk URL monitoring from sitemap data
- **examples/downloadSitemap/**: Contains utilities for parsing XML sitemaps and generating URL arrays
  - `parseSitemap.ts`: Fetches and parses sitemap.xml files into URL arrays
  - `urlArray.json`: Extracted URL list from sitemap parsing

### File Structure
```
__checks__/
├── heartbeat.check.ts          # Heartbeat monitoring
├── tcpEndpoint.check.ts        # TCP endpoint monitoring  
├── urlMonitor.check.ts         # Basic URL monitoring
└── examples/
    ├── sitemapMonitors.check.ts    # Bulk sitemap URL monitoring
    └── downloadSitemap/
        ├── parseSitemap.ts         # Sitemap parsing utility
        ├── sitemapMonitorsFromFile.check.ts
        └── urlArray.json           # Generated URL list
```

## Development Notes4

- Check files use TypeScript and import constructs from `checkly/constructs`
- Some example files are commented out to prevent accidental deployment
- The project uses CommonJS module format (`"type": "commonjs"`)
- Monitors are created by instantiating Checkly construct classes with unique logical IDs
- examine checkly.rules.md for code generation rules- examine checkly.rules.md for code generation rules
