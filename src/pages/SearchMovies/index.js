import React, { useEffect, useState } from 'react'
import { Container, FlatList, Image, NoImage, NoImageText, Title, Description, HR, AddBtn, AddBtnText } from './styles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const SearchMovies = ({ route }) => {
  const navigation = useNavigation()

  const apiSearch = 'https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=4a967f81fac3caef839b965dc2c8888b&query='

  const [movies, setMovies] = useState([])
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    axios(apiSearch + route.params.movie).then(({ data }) => {
      const results = data.results
      setMovies(results)
    })
  }, [])

  useEffect(() => {
    async function getMovie () {
      const data = await AsyncStorage.getItem('@movies')

      if (data) {
        const list = await JSON.parse(data)
        setMoviesList(list)
      }
    }

    getMovie()
  }, [])

  const handleAddMovie = async (item) => {
    const data = {
      id: item.id,
      title: item.title,
      img: item.poster_path,
      description: item.overview
    }

    moviesList.push(data)

    await AsyncStorage.setItem('@movies', JSON.stringify(moviesList))

    navigation.navigate('MoviesList')
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

            {!(moviesList.find(movie => movie.id === item.id)) &&
            <AddBtn
              onPress={() => handleAddMovie(item)}
            >
              <AddBtnText>Salvar na sua Lista</AddBtnText>
            </AddBtn>
            }

            <HR/>
          </>
        )}
      />
    </Container>
  )
}

export default SearchMovies
