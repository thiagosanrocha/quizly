import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Card from '../../components/Card';

export const Container = styled.View`
  padding: 0 24px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Emblem = styled.Image``;

export const Text = styled.Text`
  margin-left: 8px;

  font-family: 'Poppins-Medium';
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;

export const ContainerDifficultyList = styled.View`
  flex-direction: row;

  margin-top: 16px;
`;

export const DifficultyBar = styled(LinearGradient)`
  width: 24px;
  margin-right: 16px;

  background: #fff;

  border-radius: 8px;
`;

export const DifficultyList = styled.View`
  flex: 1;
`;

export const DifficultyCard = styled(Card)`
  margin: 0 0 16px;
`;
