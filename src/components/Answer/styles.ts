import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isFocus?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 14px 24px;
  margin-bottom: 16px;

  border: 1px solid #ddd;
  border-radius: 8px;

  ${({ isFocus }) =>
    isFocus &&
    css`
      background: #fca82f;
      border: 4px solid rgba(252, 168, 47, 0.5);
      padding: 11px 20px;
    `}
`;

type AnswerTextProps = {
  isFocus?: boolean;
};

export const AnswerText = styled.Text<AnswerTextProps>`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${({ isFocus }) => (isFocus ? '#FFF' : '#616d7a')};
`;
