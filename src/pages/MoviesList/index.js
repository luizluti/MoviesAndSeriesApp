import React, { useEffect, useState } from 'react'
import { Container, FlatList, Image, NoImage, NoImageText, Title, Description, HR, AddBtn, AddBtnText } from './styles'
import AsyncStorage from '@react-native-community/async-storage'

const MoviesList = ({ route }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovie () {
      const data = await AsyncStorage.getItem('@movies')
      const movie = await JSON.parse(data)
      setMovies(movie)
    }

    getMovie()
  }, [])

  return (
    <Container>
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

            <AddBtn>
              <AddBtnText>Remover da Lista</AddBtnText>
            </AddBtn>

            <HR/>
          </>
        )}
      />
    </Container>
  )
}

export default MoviesList
