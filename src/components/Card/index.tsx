import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ContainerCard, TextCard } from './styles';

type CardVariants = 'rectangular' | 'square';

export type CardProps = TouchableOpacityProps & {
  variant?: CardVariants;
  iconName?: string;
};

const Card = ({
  variant = 'square',
  iconName,
  children,
  ...rest
}: PropsWithChildren<CardProps>) => (
  <ContainerCard variant={variant} {...rest}>
    {iconName && (
      <Icon
        style={{ marginRight: 8, marginBottom: variant === 'square' ? 8 : 0 }}
        name={iconName}
        size={24}
        color="#6066D0"
      />
    )}
    <TextCard>{children}</TextCard>
  </ContainerCard>
);

export default Card;
