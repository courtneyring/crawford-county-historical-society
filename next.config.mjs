/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    optimizeFonts: false,
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
