
import { Button } from 'antd';
import React from 'react';
import { colors } from '@/assets/colors';


const CreateButton = ({ onClick, text, style }) => {
  return (
    <>
      <Button onClick={onClick}  size = 'large' style={{borderRadius: '50px', textAlign: 'center', backgroundColor: colors.yellow, color: colors.green, border: 0, ...style }}> {text}</Button>
    </>
  );
};

export default CreateButton;
