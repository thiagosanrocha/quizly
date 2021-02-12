import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import categoriesToShow from './categoriesToShow';
import { emblem } from '../../assets/images';
import { addSelectedCategory } from '../../store/modules/configsSelected/actions';

import * as S from './styles';

export type Category = { id: string; name: string };

const Categories = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddSelectedCategory = useCallback(
    (categoryId: number) => {
      dispatch(addSelectedCategory(categoryId));
      navigation.navigate('ChooseDifficulty');
    },
    [dispatch, navigation],
  );

  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Emblem source={emblem} />

        <S.Title>Choose {'\n'}a category</S.Title>
      </S.ContainerTitle>

      <ScrollView style={{ height: '88%' }}>
        <S.CategoryList>
          {categoriesToShow.map(category => (
            <S.CardCategories
              key={category.id}
              variant={category.variant ? 'rectangular' : 'square'}
              iconName={category.iconName}
              onPress={() => handleAddSelectedCategory(category.id)}
            >
              {category.name}
            </S.CardCategories>
          ))}
        </S.CategoryList>
      </ScrollView>
    </S.Container>
  );
};

export default Categories;
