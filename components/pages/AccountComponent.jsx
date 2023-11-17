import { useRouter } from 'next/router';
import {Typography} from "antd";
import { useFeatureValue } from '@growthbook/growthbook-react';
import { MailOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import { colors } from '@/assets/colors';
import React from 'react';
import { Input, Icon } from 'antd';
import CreateButton from '../buttons/CreateButton';
  
const AccountComponent = () => {
    const router = useRouter();
    const { Title } = Typography;
    const pageOrdering = useFeatureValue("page-ordering");

    const onCreateClick = () => {
        // meaning we were at basket page
        if(pageOrdering === 'basket' || pageOrdering === 'false') {
            router.push('/success');
        } else {
            router.push('/basket');
        }
    };

    return (
        <div style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Title style={{marginBottom: '50px'}}>
            { pageOrdering === 'account'  || pageOrdering !== 'false' ? 'Account is the first step': 'Account is the second step'} 
            </Title>
            <div>
                <form>
                    <Input
                        size='large'
                        placeholder="Mail"
                        prefix={<MailOutlined style={{ color: colors.orange }} />}
                        style={{ borderRadius: '30px', marginBottom: '5px' }}
                    />
                  
                    <Input
                        size='large'
                        placeholder="Nom"
                        prefix={<UserOutlined style={{ color: colors.orange}} />}
                        style={{ borderRadius: '30px', marginBottom: '5px' }}
                    />
                 
                    <Input.Password
                        size='large'
                        placeholder="Mot de passe"
                        prefix={<LockOutlined style={{ color: colors.orange }} />}
                        style={{ borderRadius: '30px' }}
                    />
                </form>
            </div>
            <div style={{ marginTop: '30px'}}>
                <CreateButton onClick={onCreateClick} text={'Créer mon compte  >'} style={{fontSize: '16px', fontWeight: 'bold', padding: '15px', paddingBottom: '40px'}}/>
            </div>
        </div>
    )
};

export default AccountComponent;