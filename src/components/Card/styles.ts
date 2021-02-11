import styled, { css } from 'styled-components/native';

import { CardProps } from '.';

const variants = {
  rectangular: css`
    flex-grow: 2;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 24px;
  `,
  square: css`
    width: 45.56%;
    justify-content: center;
    padding: 20px 24px;
  `,
};

export const ContainerCard = styled.TouchableOpacity<CardProps>`
  background: #fff;
  border-radius: 16px;
  margin: 0 8px;

  ${({ variant }) => variant && variants[variant]}
`;

export const TextCard = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #616d7a;
`;
