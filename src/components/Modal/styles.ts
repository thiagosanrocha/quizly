import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.View`
  padding-top: 32px;

  background: #fff;
  border-radius: 16px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  padding: 0 24px;

  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #274b76;
`;

export const Description = styled.Text`
  padding: 0 24px;

  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #616d7a;
`;

export const Navigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;

export const ButtonBackText = styled.Text`
  margin: 2px 0 0 8px;

  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #fca82f;
`;
