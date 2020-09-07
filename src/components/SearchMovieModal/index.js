import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Modal, Container, ModalArea, CloseModal, ModalInput } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function SearchMovieModal (props) {
  const navigation = useNavigation()

  const [value, setValue] = useState('')

  const closeModal = () => {
    props.closeModal()
    setValue('')
  }

  const searchMovie = () => {
    navigation.navigate('SearchMovies', { movie: value })
    closeModal()
  }

  return (
    <Modal
      visible={props.modalVisible}
      animationType='fade'
      transparent={true}
    >
      <Container>
        <ModalArea>
          <CloseModal
            onPress={closeModal}
          >
            <Icon name="cancel" color="#1D1D27" size={24} />
          </CloseModal>
          <ModalInput
            onSubmitEditing={searchMovie}
            placeholder='Pesquise um Filme...'
            onChangeText={text => setValue(text)}
            value={value}
          />
        </ModalArea>
      </Container>
    </Modal>

  )
}
