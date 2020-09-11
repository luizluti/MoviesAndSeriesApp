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

export const ListBtnWrapper = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px
`

export const ListBtn = styled.TouchableOpacity`
  width: 100%;
  background-color: #FFF;
  align-self: center;
  border-radius: 16px;
  padding: 10px;
`
export const ListBtnText = styled.Text`
  font-size: 24px;
  text-align: center;
`
