// Style your components here
import styled from 'styled-components'

export const MemeContainer = styled.div`
  background-image: url(${props => props.forImageUrl});
  height: 300px;
  width: 400px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    order: 0;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontsizeContent}px;
  text-align: center;
`
export const SelectedValue = styled.select`
  width: 173px;
  height: 21px;
`

export const LabelTag = styled.label`
  color: '#d7dfe9';
  font-size: 15px;
  margin-top: 10px;
`

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Heading = styled.h1`
  color: #35469c;
`

export const Generatebtn = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
  margin-top: 10px;
`

export const FormCon = styled.form`
  @media screen and (max-width: 768px) {
    order: 1;
  }
`
