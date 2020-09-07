import React, { useEffect, useState } from 'react'
import { Container, FlatList, Image, NoImage, NoImageText, Title, Description, HR } from './styles'
import Axios from 'axios'

const SearchMovies = ({ route }) => {
  const apiSearch = 'https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=4a967f81fac3caef839b965dc2c8888b&query='

  const [movies, setMovies] = useState([])

  useEffect(() => {
    Axios(apiSearch + route.params.movie).then(({ data }) => {
      const results = data.results
      setMovies(results)
    })
  }, [])

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

            <HR/>
          </>
        )}
      />
    </Container>
  )
}

export default SearchMovies
