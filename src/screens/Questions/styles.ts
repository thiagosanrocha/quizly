import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 24px;
`;

export const Header = styled.View``;

export const Status = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CurrentQuestion = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #ffffff;
`;

export const Time = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #ffffff;
`;

export const ProgressiveBar = styled.View`
  position: relative;
  height: 8px;
  margin-top: 8px;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`;

type StatusBarProps = { value: number };

export const StatusBar = styled.View<StatusBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ value }) => value}%;
  height: 100%;

  background: #fca82f;
  border-radius: 4px;
`;

export const CardQuestions = styled.View`
  margin-top: 24px;

  background: #fff;

  border-radius: 16px;
`;

export const QuestionTitle = styled.Text`
  padding: 0 24px;
  margin: 40px 0 24px;

  font-family: 'Poppins-SemiBold';
  font-style: normal;
  font-size: 18px;
  line-height: 27px;
  color: #274b76;
`;

export const ContainerAnswer = styled.View`
  padding: 0 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
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
