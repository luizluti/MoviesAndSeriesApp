import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #1D1D27
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const Text = styled.Text`
  font-size: 36px;
  color: #FFF;
`

export const SearchButton = styled.TouchableOpacity``

export const YourList = styled.TouchableOpacity`
  /* width: 90%; */
  background-color: #FFF;
  align-self: center;
  border-radius: 16px;
  margin: 20px;
  padding: 10px;
`
export const YourListText = styled.Text`
  font-size: 24px;
`
