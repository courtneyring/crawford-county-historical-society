import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function loadMarkdownFromUrl(url) {
    const response = await fetch(url);
    const raw = await response.text();

    const { data: attributes, content } = matter(raw);
    const processed = await remark().use(html).process(content);
    const htmlContent = processed.toString();

    return { attributes, htmlContent };
}