// Use .mjs extension or run with node --loader esm

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const OPPORTUNITIES_DIR = path.join(__dirname, 'pages', 'opportunities')
const DATA_DIR = path.join(__dirname, 'data')

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR)

// Get all folders inside opportunities
const categories = fs.readdirSync(OPPORTUNITIES_DIR, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

// Generate JSON for each category
for (const category of categories) {
  const folderPath = path.join(OPPORTUNITIES_DIR, category)
  const files = fs.readdirSync(folderPath).filter(f =>
    f.endsWith('.vue') && !['index.vue', '[slug].vue', '[id].vue'].includes(f)
  )

  const json = files.map(file => {
    let name = file.replace('.vue', '')
    name = name.replace(/index \(Copy \d+\)/i, 'index') // clean copied files
    const slug = name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\(|\)/g, '')
      .replace(/--+/g, '-')
    const title = name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    const description = `Read more about ${title}.`
    return { slug, title, description }
  })

  const outputFile = path.join(DATA_DIR, `${category}.json`)
  fs.writeFileSync(outputFile, JSON.stringify(json, null, 2))
  console.log(`Generated ${json.length} items for category: ${category} -> ${outputFile}`)
}