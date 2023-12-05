/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "carallel.com"]
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
