import fs from 'fs';
import glob from 'tinyglobby';

async function fix() {
  const files = await glob(['src/**/*.astro', 'src/**/*.ts']);
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;
    
    // Replace specific variables .slug with .id
    content = content.replace(/\bpost\.slug\b/g, 'post.id');
    content = content.replace(/\bp\.slug\b/g, 'p.id');
    content = content.replace(/\bproject\.slug\b/g, 'project.id');
    content = content.replace(/\bitem\.slug\b/g, 'item.id');
    content = content.replace(/result\.item\.slug\b/g, 'result.item.id');

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
}
fix();
