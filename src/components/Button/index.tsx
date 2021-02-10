import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, TextButton } from './styles';

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonProps = TouchableOpacityProps & {
  variant?: ButtonVariants;
};

const Button = ({
  variant = 'primary',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <Container variant={variant} {...rest}>
    <TextButton variant={variant}>{children}</TextButton>
  </Container>
);

export default Button;
