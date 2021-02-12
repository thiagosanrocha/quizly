import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;

  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #ffffff;
`;

export const Description = styled.Text`
  width: 200px;

  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

export const ScoreTitle = styled.Text`
  margin-top: 24px;

  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #ffffff;
`;

export const Score = styled.Text`
  margin-top: 16px;

  font-family: 'Poppins-SemiBold';
  font-size: 32px;
  color: #fff;
`;

export const RightQuestions = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 32px;
  color: #ffd15b;
`;

export const ButtonNewQuiz = styled(Button)`
  margin: 0 -4px -4px 0;
`;
