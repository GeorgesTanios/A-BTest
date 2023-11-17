import { useRouter } from 'next/router';
import {Typography} from "antd";
import { useFeatureValue } from '@growthbook/growthbook-react';
import CardBasket from "../basket/CardBasket";

const BasketComponent = () => {
    const router = useRouter();
    const { Title } = Typography;
    const pageOrdering = useFeatureValue("page-ordering");

    const onCardClick = () => {
        // meaning we were at account page
        if(pageOrdering === 'account') {
            router.push('/success');
        } else {
            router.push('/account');
        }
    };

    return (
        <div style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
         <Title style={{marginBottom: '50px'}}>
            {pageOrdering === 'basket'  || pageOrdering === 'false' ? 'Basket is the first step': 'Basket is the second step'} 
         </Title>
         <CardBasket 
            title={'Pour 1-2 personnes - Environ 4kg'}
            description={'Paniers de fruits et légumes bio, français et de saison.'}
            price={'15.80'}
            onClick={onCardClick}
          />
         <CardBasket 
            title={'Pour 3-5 personnes - Environ 8kg'}
            description={'Paniers de fruits et légumes bio, français et de saison.'}
            price={'31.60'}
            onClick={onCardClick}
          />
        </div>
    )
};

export default BasketComponent;