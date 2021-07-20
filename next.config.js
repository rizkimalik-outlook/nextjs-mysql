module.exports = {
    reactStrictMode: true,
    env: {
        appName: 'NextJS MySQL',
        customKey: 'my-value-123',
        baseUrl: 'http://localhost:3000',
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/auth/:path*',
            },
        ]
    },
}
