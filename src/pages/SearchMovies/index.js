import React, { useEffect, useState } from 'react'
import { Container, FlatList, Image, NoImage, NoImageText, Title, Description, HR, AddBtn, AddBtnText } from './styles'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const SearchMovies = ({ route }) => {
  const apiSearch = 'https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=4a967f81fac3caef839b965dc2c8888b&query='

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios(apiSearch + route.params.movie).then(({ data }) => {
      const results = data.results
      setMovies(results)
    })
  }, [])

  const handleAddMovie = (item) => {
    alert(`${item.id}`)
  }

  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            {item.poster_path
              ? <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
              />
              : <NoImage>
                <NoImageText>Sem Imagem</NoImageText>
              </NoImage> }

            <Title>{item.title}</Title>

            <Description>{item.overview}</Description>

            <AddBtn
              onPress={() => handleAddMovie(item)}
            >
              <AddBtnText>Salvar na sua Lista</AddBtnText>
            </AddBtn>

            <HR/>
          </>
        )}
      />
    </Container>
  )
}

export default SearchMovies
