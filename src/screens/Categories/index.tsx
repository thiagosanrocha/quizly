import React from 'react';
import { ScrollView } from 'react-native';

import { emblem } from '../../assets/images';

import * as S from './styles';

export type Category = { id: string; name: string };

const Categories = () => (
  <S.Container>
    <S.ContainerTitle>
      <S.Emblem source={emblem} />

      <S.Title>Choose {'\n'}a category</S.Title>
    </S.ContainerTitle>

    <ScrollView style={{ height: '88%' }}>
      <S.CategoryList>
        <S.CardCategories iconName="align-left">
          General Knowledge
        </S.CardCategories>

        <S.CardCategories iconName="globe">Science Nature</S.CardCategories>

        <S.CardCategories iconName="film" variant="rectangular">
          Entertainment: Film
        </S.CardCategories>

        <S.CardCategories iconName="music" variant="rectangular">
          Entertainment: Music
        </S.CardCategories>

        <S.CardCategories iconName="airplay">
          Science: Computers
        </S.CardCategories>

        <S.CardCategories iconName="smartphone">
          Science: Gadgets
        </S.CardCategories>

        <S.CardCategories iconName="tv" variant="rectangular">
          Entertainment: Television
        </S.CardCategories>
      </S.CategoryList>
    </ScrollView>
  </S.Container>
);

export default Categories;
