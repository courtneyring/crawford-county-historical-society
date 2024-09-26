/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV == 'development' ? '' : '/crawford-county-historical-society';


const nextConfig = {
    output: 'export',
    basePath,
    assetPrefix: basePath,
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
