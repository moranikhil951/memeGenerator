import {Component} from 'react'

import {
  MemeContainer,
  TextContent,
  SelectedValue,
  LabelTag,
  MainContainer,
  ResponsiveContainer,
  Heading,
  Generatebtn,
  FormCon,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topTextValue: '',
    bottomTextValue: '',
    fontSizeValue: fontSizesOptionsList[0].optionId,
    genImage: '',
    topInput: '',
    bottomInput: '',
  }

  generateMemeSubmit = event => {
    event.preventDefault()
    const {
      imageInput,
      topTextValue,
      bottomTextValue,
      fontSizeValue,
    } = this.state
    this.setState({
      genImage: imageInput,
      topInput: topTextValue,
      bottomInput: bottomTextValue,
      fontInput: fontSizeValue,
    })
  }

  changeInputImage = event => {
    this.setState({imageInput: event.target.value})
  }

  changeTopText = event => {
    this.setState({topTextValue: event.target.value})
  }

  chanegBottomText = event => {
    this.setState({bottomTextValue: event.target.value})
  }

  optionFontSize = event => {
    this.setState({fontSizeValue: event.target.value})
  }

  render() {
    const {
      imageInput,
      topTextValue,
      bottomTextValue,
      fontSizeValue,
      topInput,
      genImage,
      bottomInput,
      fontInput,
    } = this.state
    console.log(imageInput, topTextValue, bottomTextValue, fontSizeValue)
    return (
      <MainContainer>
        <ResponsiveContainer>
          <FormCon onSubmit={this.generateMemeSubmit}>
            <Heading>Meme Generator</Heading>
            <LabelTag htmlFor="textInput">Image URL</LabelTag>
            <br />
            <input
              type="text"
              id="textInput"
              value={imageInput}
              onChange={this.changeInputImage}
              placeholder="Enter the image URL"
            />
            <br />
            <LabelTag htmlFor="topText">Top Text</LabelTag>
            <br />
            <input
              placeholder="Enter the Top Text"
              type="text"
              id="topText"
              value={topTextValue}
              onChange={this.changeTopText}
            />
            <br />
            <LabelTag htmlFor="bottomText">Bottom Text</LabelTag>
            <br />
            <input
              type="text"
              id="bottomText"
              onChange={this.chanegBottomText}
              value={bottomTextValue}
              placeholder="Enter the Bottom Text"
            />
            <br />
            <label htmlFor="fontSize">Font Size</label>
            <br />
            <SelectedValue
              onChange={this.optionFontSize}
              value={fontSizeValue}
              id="fontSize"
            >
              {fontSizesOptionsList.map(fontSize => (
                <option value={fontSize.optionId} key={fontSize.optionId}>
                  {fontSize.displayText}
                </option>
              ))}
            </SelectedValue>
            <br />
            <Generatebtn type="submit">Generate</Generatebtn>
          </FormCon>

          <MemeContainer data-testid="meme" forImageUrl={genImage}>
            <TextContent fontsizeContent={fontInput}>{topInput}</TextContent>
            <TextContent fontsizeContent={fontInput}>{bottomInput}</TextContent>
          </MemeContainer>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
