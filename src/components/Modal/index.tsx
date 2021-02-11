import React from 'react';
import { ViewProps } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import Button from '../Button';

import * as S from './styles';

type ModalProps = ViewProps & {
  isVisible: boolean;
  title: string;
  description?: string;
  closeModal(): void;
  confirmModal(): void;
};

const Modal = ({
  isVisible,
  title,
  description,
  closeModal,
  confirmModal,
}: ModalProps) => (
  <>
    {isVisible && (
      <S.Container>
        <S.Modal>
          <S.Title>{title}</S.Title>

          {description && <S.Description>{description}</S.Description>}

          <S.Navigation>
            <S.ButtonBack onPress={closeModal}>
              <FeatherIcons name="arrow-left" size={20} color="#FCA82F" />
              <S.ButtonBackText>Back</S.ButtonBackText>
            </S.ButtonBack>

            <Button variant="secondary" onPress={confirmModal}>
              Yes
            </Button>
          </S.Navigation>
        </S.Modal>
      </S.Container>
    )}
  </>
);

export default Modal;
