import React from 'react';
import { colors } from '@/assets/colors';
// import styles from '@/styles/card-basket.module.css';
import { RightOutlined } from '@ant-design/icons';


const CardBasket = ({title, description, price, onClick}) => {
    return (
      <div style={{
          display:'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
          width: '50%', 
          marginTop: '10px',
          border: `5px solid ${colors.orange}`,
          borderRadius: '10px',
          padding: '5px 15px 5px 15px',
          cursor: 'pointer',
      }}
      onClick={onClick}
      >
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}>
            <h3 style={{fontSize: '30px', fontWeight: 'bold'}}>{title}</h3>
            <p style={{fontSize: '14px'}}>{description}</p>
          </div>
          <div style={{marginBottom: '5px'}}>
            <p><span style={{fontSize: '20px', fontWeight: 'bold'}} >{price}€ </span>/week</p>
          </div>
       </div>
       <div>
         <RightOutlined style={{fontSize: '40px'}}/>
       </div>
      </div>

    )
};

export default CardBasket;