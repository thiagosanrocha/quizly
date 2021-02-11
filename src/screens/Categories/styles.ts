import styled from 'styled-components/native';

import Card from '../../components/Card';

export const Container = styled.View``;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;

  margin-left: 24px;
`;

export const Emblem = styled.Image``;

export const Title = styled.Text`
  margin-left: 8px;

  font-family: 'Poppins-Medium';
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;

export const CategoryList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 16px;
  margin-top: 16px;
`;

export const CardCategories = styled(Card)`
  margin-bottom: 16px;
`;
