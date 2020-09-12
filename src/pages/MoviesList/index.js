import React, { useEffect, useState } from 'react'
import { Container, Header, HeaderBtn, HeaderText, ListWrapper, FlatList, Image, NoImage, NoImageText, Title, Description, HR, AddBtn, AddBtnText } from './styles'
import { useNavigation, StackActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

const MoviesList = ({ route }) => {
  const navigation = useNavigation()

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovie () {
      const data = await AsyncStorage.getItem('@movies')
      const movie = await JSON.parse(data)
      setMovies(movie)
    }

    getMovie()
  }, [])

  const handleDeleteMovie = async (itemId) => {
    const newList = movies.filter(item => item.id !== itemId)
    await AsyncStorage.setItem('@movies', JSON.stringify(newList))
    setMovies(newList)
  }

  return (
    <Container>
      <Header>
        <HeaderBtn
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <HeaderText>Início</HeaderText>
        </HeaderBtn>
      </Header>

      <ListWrapper>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              {item.img
                ? <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w200${item.img}` }}
                />
                : <NoImage>
                  <NoImageText>Sem Imagem</NoImageText>
                </NoImage> }

              <Title>{item.title}</Title>

              <Description>{item.description}</Description>

              <AddBtn
                onPress={() => handleDeleteMovie(item.id)}
              >
                <AddBtnText>Remover da Lista</AddBtnText>
              </AddBtn>

              <HR/>
            </>
          )}
        />
      </ListWrapper>

    </Container>
  )
}

export default MoviesList
