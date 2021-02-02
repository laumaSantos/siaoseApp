import styled from 'styled-components/native';

export const Container = styled.View `
    margin-top: 22px;
    flex: 1;
    background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1px;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex:1;
    background-color:  #ffa07a;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;

`;

export const PageBody = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;

`;

export const UserInfoArea = styled.View`
     flex-direction: row;
     margin-top: -30px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFFFF;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2px;
`;

export const UserInfoCategoria = styled.Text`
    color: #268596;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const ServiceArea = styled.View`
    margin-top: 30px;
`;
export const NoServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fa8072;
    margin-top:50px;
    margin-left: 30px;
    margin-bottom: 20px;
`;
export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fa8072;
    margin-left: 30px;
    margin-bottom: 20px;
`;
export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;
export const ServiceInfo = styled.View`
    flex: 1;
`;
export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #268596;
`;
export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #268596;
`;
export const ServiceChooseButton = styled.TouchableOpacity`
    background-color:#fa8072;
    border-radius: 10px;
    padding: 10px 15px;
    align-items:center;
    justify-content: center;
`;
export const ServiceChooseBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
