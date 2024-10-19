// next.config.js
const withImages = require('next-images');
module.exports = withImages({
  images: {
    domains: ['your-image-domain.com'], // 替换为您的图片域名
  },
});

