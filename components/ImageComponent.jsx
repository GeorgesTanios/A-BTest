import { Image } from 'antd';

const ImageComponent = ({url}) => {
    
    return <Image src ={url} alt='food' preview = {false}/>
};

export default ImageComponent;