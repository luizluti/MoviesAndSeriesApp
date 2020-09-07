import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image
} from 'react-native'

import { Container } from './styles'
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
        style={styles.results}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.results}>

            {item.poster_path
              ? <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                style={{
                  height: 400,
                  width: 250,
                  alignSelf: 'center',
                  marginTop: 20
                }}
                // resizeMode="cover"
              />
              : <View style={{
                width: '100%',
                height: 200,
                backgroundColor: '#445565',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
              }}>
                <Text style={{
                  fontSize: 24
                }}>Sem Imagem</Text>
              </View> }

            <Text style={styles.heading}>{item.title}</Text>

            <Text style={{
              color: '#909090',
              fontSize: 16,
              margin: 10
            }}>{item.overview}</Text>
            {/* <Text style={{ margin: 10, color: '#FFF' }}>Nota: {item.vote_average}</Text> */}
          </View>
        )}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10
  },
  results: {
    flex: 1,
    borderBottomColor: '#909090',
    borderBottomWidth: 1
  },
  movie: {
    flex: 1,
    width: '100%'
  },
  heading: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    alignSelf: 'center'
    // backgroundColor: '#445565'
  }
})

export default SearchMovies
