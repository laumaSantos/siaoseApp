import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

import { Container,
        InputArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold

 } from './styles';
import Api from '../../Api';

import Input from '../../Componentes/Input';

import MakeLogo from '../../assets/make.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const[passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

            let response = await Api.signIn(emailField, passwordField);
            if(!response.error) {
                await AsyncStorage.setItem('id', response.id.toString());

                navigation.reset({
                    routes: [{name:'MainTab'}]
                });
               
            }else{
                alert('E-mail ou senha errados!');
           }
        }else {
            alert("Preencha todos os campos!");
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]

        });
    }

    return (
        <Container>
           <MakeLogo width="100%" height="160"/>

           <InputArea>
                <Input 
                    IconSvg={EmailIcon}
                    keyboardType={'email-address'}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
               
                <Input
                     IconSvg={LockIcon}
                     placeholder="Digite sua senha"
                     value={passwordField}
                     onChangeText={t=>setPasswordField(t)}
                     password={true}
                />


                 <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
           </InputArea>

           <SignMessageButton onPress={handleMessageButtonClick}>
               <SignMessageButtonText>Ainda não possui uma conta</SignMessageButtonText>
               <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
           </SignMessageButton>
        </Container>

    );

}