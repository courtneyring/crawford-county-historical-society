import nextConfig from "../../../next.config.mjs";
import Button from "../Button/Button";
import styles from './Event.module.scss';

const Event = ({name, start, end, image, location, description, cta}) => {
    
    return (

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5 h-full ${styles.event}`}>
            
            <img src={`${nextConfig.basePath}${image}`} className="h-full w-full object-cover " style={{overflow: 'hidden'}}/>
            <div className="col-span-1 md:col-span-1 lg:col-span-2 flex items-start justify-between flex-col pt-5 md:pt-0">
                <div className="mb-8">
                    <h2 className="mb-3 text-3xl font-regular">{name}</h2>
                    <p className="mb-0 text-xl">{start} - {end}</p>
                    <p className="mb-5 text-xl">{location}</p>
                    <p className="mb-0 text-xl">{description}</p>
                </div>
                
                <Button url={cta.value} variation='primary'>{cta.label}</Button>

            </div>
        </div>
    )
}

export default Event;