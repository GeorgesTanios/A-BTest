


import { Input } from "antd";
import React from 'react';
import { colors } from '@/assets/colors';


const InputWithIcon = ({ icon, placeholder, ...props }) => {
  return (
    <>
             <Input
        {...props}
        prefix={icon}
        style={{
          borderRadius: '5px',
          border: '1px solid #ccc',
          padding: '10px',
          display: 'flex',
        }}
      />
    </>
  );
};

export default InputWithIcon;
