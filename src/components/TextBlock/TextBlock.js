import styles from './TextBlock.module.scss';
import { Button } from '@/components';

const TextBlock = ({heading, children, cta}) => {
    return (
        <div className={` container mx-auto  px-5 ${styles.textblock}`}>
            <h2 >{heading}</h2>
            <div>
                <p dangerouslySetInnerHTML={{ __html: children }} ></p>
                {cta && <Button variation='primary' url={cta.value}>{cta.label}</Button>}
            </div>
            
        </div>
    )
}

export default TextBlock;