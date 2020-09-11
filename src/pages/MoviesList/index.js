import React, { useEffect, useState } from 'react'
import { Container, FlatList, Image, NoImage, NoImageText, Title, Description, HR, AddBtn, AddBtnText } from './styles'
import AsyncStorage from '@react-native-community/async-storage'

const MoviesList = ({ route }) => {
  const [movies, setMovies] = useState([])

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

            <AddBtn>
              <AddBtnText>Salvar na sua Lista</AddBtnText>
            </AddBtn>

            <HR/>
          </>
        )}
      />
    </Container>
  )
}

export default MoviesList
