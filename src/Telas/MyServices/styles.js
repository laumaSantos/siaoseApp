import styled from 'styled-components/native';

export const Container = styled.View `
    padding-top: 22px;
    flex: 1;
    background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1px;
`;

export const PageBody = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 50px;
    margin-top: 20px;
    min-height: 400px;
`;

export const NoServicesTitle = styled.Text`
    font-size: 20px;
    max-width: 300px;
    font-weight: bold;
    color: #fa8072;
    margin: 50px 0px;
    align-self: center;
    text-align: center;
`;
export const ServicesTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fa8072;
    margin-left: 30px;
    margin-bottom: 20px;
    text-align: center;
`;
export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fa8072;
`;
export const ServiceInfo = styled.View`
    flex: 1;
`;
export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #fff;
`;
export const ServiceChooseButton = styled.TouchableOpacity`
    background-color:#fff;
    border-radius: 10px;
    height:60px;
    padding: 10px;
    margin: 5px;
    align-items:center;
    justify-content: center;
`;
export const ServiceChooseBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #268596;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 20px;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
