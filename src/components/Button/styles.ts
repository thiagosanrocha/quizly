import styled, { css } from 'styled-components/native';
import { ButtonProps } from '.';

const variants = {
  primary: css`
    width: 200px;
    border-top-left-radius: 16px;
  `,
  secondary: css`
    width: 164px;
    border-top-left-radius: 16px;
    border-bottom-right-radius: 16px;
  `,
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;

  padding: 14px 24px;
  background: #fca82f;

  border: 4px solid rgba(252, 168, 47, 0.5);

  ${({ variant }) => variant && variants[variant]}
`;

export const TextButton = styled.Text<Pick<ButtonProps, 'variant'>>`
  color: #fff;
  font-size: ${({ variant }) => (variant === 'secondary' ? '16px' : '24px')};
  font-family: 'Poppins-Medium';
`;
