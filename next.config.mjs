/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.pichau.com.br' },
      { protocol: 'https', hostname: 'images9.kabum.com.br' },
      { protocol: 'http',  hostname: 'lg.com' },
      { protocol: 'https', hostname: 'i.zst.com.br' },
      { protocol: 'https', hostname: 'www.cadeirasparaescritorio.ind.br' },
      { protocol: 'https', hostname: 'images.tcdn.com.br' },
    ],
  },
};

export default nextConfig;
