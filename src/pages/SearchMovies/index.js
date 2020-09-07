import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

const SearchMovies = ({ route }) => {
  return (
    <Container>
      <Text style={{ fontSize: 24, color: '#FFF', alignSelf: 'center' }}>{route.params.movie}</Text>
    </Container>
  )
}

export default SearchMovies
