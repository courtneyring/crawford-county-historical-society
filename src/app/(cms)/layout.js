import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '700'] })

export const metadata = {
    title: {
        absolute: 'CMS',
    },
}


export default function CMSLayout({ children }) {

    return (
        <html lang="en" >
            <body className={urbanist.className}>
                
 
                <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
                <script src='/scripts/test.js'>
                </script>
                {children}
                
            </body>
        </html>
    );
}
