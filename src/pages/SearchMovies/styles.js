import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #1D1D27;
  padding: 10px
`

export const FlatList = styled.FlatList``

export const List = styled.View`
  flex: 1;
  border-bottom-color: #909090;
  border-bottom-width: 1px
`

export const Image = styled.Image`
  width: 250px;
  height: 400px;
  align-self: center;
  margin-top: 20px;
`

export const NoImage = styled.View`
width: 250px;
height: 400px;
background-color: #445565;
justify-content: center;
align-self: center;
align-items: center;
margin-top: 20px;
`
export const NoImageText = styled.Text`
  font-size: 24px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 24px;
  /* font-weight: 700; */
  margin-top: 10px;
  align-self: center;
  text-align: center;
`

export const Description = styled.Text`
  color: #909090;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
`

export const HR = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #909090;
`
export const AddBtn = styled.TouchableOpacity`
  width: 100%;
  background-color: #FFF;
  align-self: center;
  border-radius: 16px;
  margin-bottom: 20px;
  padding: 10px;
`
export const AddBtnText = styled.Text`
  font-size: 24px;
  text-align: center;
`
