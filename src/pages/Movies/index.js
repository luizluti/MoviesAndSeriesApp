import React, { useState } from 'react'
import { Container, Header, Text, SearchButton } from './styles'
// import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchMovieModal from '../../components/SearchMovieModal'
import MoviesCarousel from '../../components/MoviesCarousel'

const Movies = () => {
  // const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <Container>
      <Header>
        <Text>Populares</Text>
        <SearchButton onPress={() => { setModalVisible(true) }}>
          <Icon name="search" color="#FFF" size={36} />
        </SearchButton>
      </Header>

      <SearchMovieModal
        modalVisible={modalVisible}
        closeModal={closeModal}
      />

      <MoviesCarousel />

    </Container>
  )
}

export default Movies
