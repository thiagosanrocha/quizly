import React from 'react';

import { emblem } from '../../assets/images';

import {
  Container,
  ContainerTitle,
  Emblem,
  Title,
  CategoryList,
  CardCategories,
} from './styles';

export type Category = { id: string; name: string };

const Categories = () => (
  <Container>
    <ContainerTitle>
      <Emblem source={emblem} />

      <Title>Choose {'\n'}a category</Title>
    </ContainerTitle>

    <CategoryList>
      <CardCategories iconName="align-left">General Knowledge</CardCategories>

      <CardCategories iconName="globe">Science Nature</CardCategories>

      <CardCategories iconName="film" variant="rectangular">
        Entertainment: Film
      </CardCategories>

      <CardCategories iconName="music" variant="rectangular">
        Entertainment: Music
      </CardCategories>

      <CardCategories iconName="airplay">Science: Computers</CardCategories>

      <CardCategories iconName="smartphone">Science: Gadgets</CardCategories>

      <CardCategories iconName="tv" variant="rectangular">
        Entertainment: Television
      </CardCategories>
    </CategoryList>
  </Container>
);

export default Categories;
