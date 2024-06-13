import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageName = process.argv[2];

if (!pageName) {
    console.error('Te falta el nombre de la page.');
    process.exit(1);
}

const pageDir = path.join(__dirname, 'src', 'pages');
const pageFilePath = path.join(pageDir, `${pageName}.astro`);

const pageTemplate = `
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="${pageName}">
    
</Layout>
`;

fs.mkdirSync(pageDir, { recursive: true });

if (fs.existsSync(pageFilePath)) {
    console.error('La página ya existe.');
    process.exit(1);
}

fs.writeFileSync(pageFilePath, pageTemplate.trim());

console.log(`Page ${pageName}.astro creada.`);
