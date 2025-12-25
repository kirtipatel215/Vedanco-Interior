
const fs = require('fs');
const https = require('https');
const path = require('path');

// List of assets to download (mirrors assets.ts)
const assets = [
  // Hero
  { url: "https://videos.pexels.com/video-files/7578546/7578546-uhd_2560_1440_30fps.mp4", filename: "hero-video.mp4" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop", filename: "hero-poster.jpg" },
  
  // Showcase
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", filename: "showcase-main.jpg" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop", filename: "showcase-detail.jpg" },

  // Services
  { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop", filename: "service-civil.jpg" },
  { url: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1200&auto=format&fit=crop", filename: "service-lighting.jpg" },
  { url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop", filename: "service-furniture.jpg" },
  { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop", filename: "service-kitchen.jpg" },
  { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop", filename: "service-paint.jpg" },
  { url: "https://images.unsplash.com/photo-1596464708761-a9681eb20c27?q=80&w=1200&auto=format&fit=crop", filename: "service-plan.jpg" },
  { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop", filename: "service-render.jpg" },
  { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop", filename: "service-walkthrough.jpg" },
  { url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop", filename: "service-material.jpg" },
  { url: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=1200&auto=format&fit=crop", filename: "service-layout.jpg" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", filename: "service-commercial.jpg" },

  // Projects
  { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop", filename: "project-1.jpg" },
  // project-2 is same as hero poster
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", filename: "project-3.jpg" },
  { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop", filename: "project-4.jpg" },
  { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop", filename: "project-5.jpg" },
];

const downloadDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

console.log(`Downloading ${assets.length} assets to ${downloadDir}...`);

assets.forEach((asset, index) => {
  const filePath = path.join(downloadDir, asset.filename);
  const file = fs.createWriteStream(filePath);

  https.get(asset.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`[${index + 1}/${assets.length}] Downloaded ${asset.filename}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file async
    console.error(`Error downloading ${asset.filename}: ${err.message}`);
  });
});
