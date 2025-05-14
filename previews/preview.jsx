import HomePreview from './Home.preview.jsx';
import AboutPreview from './About.preview.jsx';
import.meta.glob('../src/**/*.module.scss', { eager: true });
import '@/styles/globals.scss';

CMS.registerPreviewStyle('preview.css')
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('about', AboutPreview);
