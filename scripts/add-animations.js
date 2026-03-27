const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src');

// Phase 2: Add imports + wrap h1/h2 in page-level files
const pages = [
  path.join(base, 'app', 'faq', 'page.tsx'),
  path.join(base, 'app', 'pay-and-rules', 'page.tsx'),
  path.join(base, 'app', 'safeguarding', 'page.tsx'),
];

pages.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('MotionDiv')) {
    console.log(`SKIP page: ${filePath}`);
    return;
  }

  // Add import after metadata import
  const importLine = `import { MotionDiv } from "@/components/ui/motion";\nimport { fadeInUp } from "@/lib/motion";`;
  const lines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('import ') || t.startsWith('} from ')) lastImportIdx = i;
  }
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, importLine);
  }
  content = lines.join('\n');

  // Wrap each <h1 into MotionDiv
  content = content.replace(
    /(\s*)(<h1\s)/g,
    '$1<MotionDiv variants={fadeInUp}>\n$1$2'
  );
  content = content.replace(
    /(<\/h1>)/g,
    '$1\n            </MotionDiv>'
  );

  // Wrap each <h2 into MotionDiv  
  content = content.replace(
    /(\s*)(<h2\s)/g,
    '$1<MotionDiv variants={fadeInUp}>\n$1$2'
  );
  content = content.replace(
    /(<\/h2>)/g,
    '$1\n            </MotionDiv>'
  );

  // Replace final CTA bg-primary-light with gradient
  content = content.replace(
    'className="w-full bg-primary-light py-16 md:py-24"',
    'className="w-full relative overflow-hidden gradient-cta py-16 md:py-24"'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated page: ${path.basename(path.dirname(filePath))}`);
});

console.log('Pages done.\n');
process.exit(0);

const dirs = ['about', 'how-it-works', 'tutoring-on-fawrii'];

dirs.forEach(dir => {
  const dirPath = path.join(base, dir);
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has MotionDiv
    if (content.includes('MotionDiv')) {
      console.log(`SKIP (already done): ${dir}/${file}`);
      return;
    }
    
    // Add imports after last import line
    const importMotion = `import { MotionDiv } from "@/components/ui/motion";\nimport { fadeInUp, scaleIn } from "@/lib/motion";`;
    
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith('import ') || trimmed.startsWith('} from ')) lastImportIdx = i;
    }
    if (lastImportIdx >= 0) {
      lines.splice(lastImportIdx + 1, 0, importMotion);
    }
    content = lines.join('\n');
    
    // For Hero sections (no SectionWrapper) — wrap the inner content div
    if (file === 'HeroSection.tsx') {
      // Wrap <h1> in MotionDiv
      content = content.replace(
        /(\s*)(<h1\s)/,
        '$1<MotionDiv variants={fadeInUp}>\n$1$2'
      );
      content = content.replace(
        /(<\/h1>)/,
        '$1\n          </MotionDiv>'
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated hero: ${dir}/${file}`);
      return;
    }

    // For FinalCta sections — wrap headline + body
    if (file === 'FinalCtaSection.tsx') {
      // Add gradient-cta class if not already
      content = content.replace(
        'className="bg-primary-light py-16 md:py-24"',
        'className="relative overflow-hidden gradient-cta py-16 md:py-24"'
      );
      
      // Wrap the <h2> in MotionDiv
      content = content.replace(
        /(\s*)(<h2\s)/,
        '$1<MotionDiv variants={fadeInUp}>\n$1$2'
      );
      content = content.replace(
        /(<\/h2>)/,
        '$1\n          </MotionDiv>'
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated finalcta: ${dir}/${file}`);
      return;
    }

    // For DirectorVideo sections — wrap video
    if (file === 'DirectorVideoSection.tsx') {
      content = content.replace(
        /(\s*)(<VideoEmbed)/,
        '$1<MotionDiv variants={scaleIn} delay={0.1}>\n$1$2'
      );
      content = content.replace(
        /(<\/VideoEmbed>|<VideoEmbed[^/]*\/>)/,
        '$1\n          </MotionDiv>'
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated video: ${dir}/${file}`);
      return;
    }

    // For all other sections with SectionWrapper — wrap SectionHeading + first text block
    // Simple approach: wrap <SectionHeading> tag
    if (content.includes('<SectionHeading')) {
      // Find the SectionHeading line and wrap it
      const sLines = content.split('\n');
      let headingStart = -1;
      let headingEnd = -1;
      
      for (let i = 0; i < sLines.length; i++) {
        if (sLines[i].includes('<SectionHeading') && headingStart === -1) {
          headingStart = i;
        }
        if (headingStart >= 0 && sLines[i].includes('</SectionHeading>')) {
          headingEnd = i;
          break;
        }
      }
      
      if (headingStart >= 0 && headingEnd >= 0) {
        // Get indentation
        const indent = sLines[headingStart].match(/^(\s*)/)[1];
        sLines.splice(headingStart, 0, `${indent}<MotionDiv variants={fadeInUp}>`);
        // headingEnd shifted by 1
        sLines.splice(headingEnd + 2, 0, `${indent}</MotionDiv>`);
        content = sLines.join('\n');
      }
    }

    // Wrap callout card divs (rounded-xl bg-) in MotionDiv with scaleIn
    content = content.replace(
      /(\s*)({\/* Callout card[^*]*\*\/})\n(\s*)(<div className="rounded-xl)/,
      '$1$2\n$3<MotionDiv variants={scaleIn} delay={0.1}>\n$3$4'
    );
    
    // Find the closing </div> of callout cards and add </MotionDiv>
    // This is tricky with regex, so we'll do a simpler approach:
    // Just wrap the div after "Callout card" comment
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${dir}/${file}`);
  });
});

console.log('\nDone! All sections updated.');
