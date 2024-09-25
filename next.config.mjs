/** @type {import('next').NextConfig} */


const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV == 'development' ? '' : '/crawford-county-historical-society',
    assetPrefix: process.env.NODE_ENV == 'development' ? '' : '/crawford-county-historical-society',
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    }
};

export default nextConfig;
