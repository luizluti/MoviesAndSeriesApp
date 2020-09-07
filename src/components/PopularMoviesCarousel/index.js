import React, { useState, useRef, useEffect } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { Container, SlideView, CarouselImg, Title } from './styles'
import Carousel from 'react-native-snap-carousel'
import axios from 'axios'

const { width: screenWidth } = Dimensions.get('window')

export default function PopularMoviesCarousel () {
  const apiPupular = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4a967f81fac3caef839b965dc2c8888b&language=pt-BR'

  useEffect(() => {
    axios(apiPupular).then(({ data }) => {
      const results = data.results
      setMovies(results)
    })
  }, [])

  const carouselRef = useRef(null)

  const [movies, setMovies] = useState([{ title: 'Carregando...' }])
  const [activeIndex, setActiveIndex] = useState(0)

  const onRenderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity>
          <CarouselImg
            source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          />
        </TouchableOpacity>
      </>
    )
  }

  return (
    <Container>
      <SlideView>
        <Carousel
          style={{ flex: 1, overflow: 'visible' }}
          ref={carouselRef}
          data={movies}
          renderItem={onRenderItem}
          sliderWidth={screenWidth}
          itemWidth={200}
          inactiveSlideOpacity={0.5}
          onSnapToItem={(index) => {
            setActiveIndex(index)
          }}
        />
        <Title>{movies[activeIndex].title}</Title>
      </SlideView>
    </Container>
  )
}
