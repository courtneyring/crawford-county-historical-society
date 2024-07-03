import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

export const ParseContent = ({ content, tag, className }) => {
    const Tag = tag;
    return (
        <Tag className={className}>{content && parse(DOMPurify.sanitize(content))}</Tag>
)

    
};
