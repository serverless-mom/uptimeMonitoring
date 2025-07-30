const fs = require('fs');
const sitemapUrl = 'https://openai.com/sitemap.xml';

async function fetchSitemap(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function parseXML(xmlContent) {
  const urls:string[] = [];
  
  const urlMatches = xmlContent.match(/<loc>(.*?)<\/loc>/g);
  if (urlMatches) {
    for (const match of urlMatches) {
      const url = match.replace(/<\/?loc>/g, '');
      urls.push(url);
    }
  }
  
  return urls;
}

async function main() {
  try {
    console.log('Fetching sitemap...');
    const xmlContent = await fetchSitemap(sitemapUrl);
    const urls = parseXML(xmlContent);
    
    // Remove duplicates
    const uniqueUrls = [...new Set(urls)];
    
    console.log(`Found ${uniqueUrls.length} unique URLs`);
    
    // Write to file
    const outputFile = 'urlArray.json';
    fs.writeFileSync(outputFile, JSON.stringify(uniqueUrls, null, 2));
    
    console.log(`URLs saved to ${outputFile}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}