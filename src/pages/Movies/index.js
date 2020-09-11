import React, { useState } from 'react'
import { Container, Header, Text, SearchButton, ListBtnWrapper, ListBtn, ListBtnText } from './styles'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchMovieModal from '../../components/SearchMovieModal'
import PopularMoviesCarousel from '../../components/PopularMoviesCarousel'

const Movies = () => {
  const navigation = useNavigation()

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

      <PopularMoviesCarousel />

      <ListBtnWrapper>
        <ListBtn
        // eslint-disable-next-line no-undef
          onPress={() => navigation.navigate('MoviesList')}
        >
          <ListBtnText>Sua lista de Filmes</ListBtnText>
        </ListBtn>
      </ListBtnWrapper>

    </Container>
  )
}

export default Movies
