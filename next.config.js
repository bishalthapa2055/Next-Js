/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains :['images.unsplash.com']
  },
  env :{
    api_key : "bishalthapa_api_key"
  }
}

module.exports = nextConfig
