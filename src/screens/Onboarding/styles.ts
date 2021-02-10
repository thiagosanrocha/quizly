import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const FeaturedImage = styled.Image`
  width: 90%;
  margin: 100px 0 0 10%;
`;

export const Title = styled.Text`
  margin-top: -40px;
  padding: 0 24px;

  color: #274b76;
  font-size: 32px;
  font-family: 'Poppins-SemiBold';
  line-height: 48px;
`;

export const Description = styled.Text`
  margin-top: 16px;
  padding: 0 24px;

  color: #616d7a;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const ButtonStartQuiz = styled(Button)`
  position: absolute;
  bottom: -4px;
  right: -4px;
`;
