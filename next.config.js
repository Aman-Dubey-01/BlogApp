/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
      },
}

module.exports = nextConfig
