import styled from 'styled-components/native';

export const Container = styled.ScrollView `
    /* padding-top: 40px; */
    /* background-color: ; */
`

export const UserInfoArea = styled.View`
     flex-direction: row;
     justify-content: space-evenly;
     background-color: #fff;
     padding-top: 40px;
     margin-bottom: 5px;
     border-color: #268596;
     border-bottom-left-radius: 40px;
     /* border-bottom-right-radius: 40px; */
`;

export const UserAvatar = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 2px;
    border-color: #fff;
    background-color: #ccc;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserInfoLabel = styled.Text`
    color: #268596;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 0px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border: 0.5px solid #268596;
    border-radius: 10px;
    width: 90%;
    padding: 10px 15px;
    margin: 5px 10px; 
    align-items:center;
    justify-content: space-between;
    align-self: center;
`;
export const BtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #268596;
`;

export const LogoutBtn = styled.TouchableOpacity`
    width: 50%;
    padding: 10px 15px;
    margin: 5px 10px; 
    align-items:center;
    justify-content: space-between;
    align-self: center;
    flex-direction: row;
    background-color: #cd5c5c;
    border-radius: 10px;
`;

export const LogoutBtnText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const DicasArea = styled.View`
     margin-top: 10px;
     margin-bottom: 10px;
     align-items:center;
`;

export const DicasTitle = styled.Text`
    font-size: 22px;
    font-weight: 400;
    color: #268596;
    margin-bottom: 4px;
    font-style: italic;
`;

export const DicasItem = styled.View`
    background-color: #ffcfcc;
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
`;
export const DicasInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const DicasName = styled.Text`
    color: #268596;
    font-size: 14px;
    font-weight: bold;
`;
export const DicasBody = styled.Text`
    color: #268596;
    font-size: 13px;
`;

