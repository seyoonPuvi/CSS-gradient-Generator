import {Component} from 'react'
import {
  Container,
  MainContainer,
  Heading,
  SubHeading,
  ColorInputMainContainer,
  ColorDescription,
  ColorInputContainer,
  ButtonListContainer,
  Button,
  Input,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    directionValue: gradientDirectionsList[0].value,
    activeDirectionValue: gradientDirectionsList[0].value,
    colorOneValue: '#8ae323',
    activeColorOne: '#8ae323',
    colorTwoValue: '#014f7b',
    activeColorTwo: '#014f7b',
  }

  onChangeColorOne = event => {
    this.setState({colorOneValue: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwoValue: event.target.value})
  }

  onChangeDirection = value => {
    this.setState({directionValue: value})
  }

  onGenerateColor = () => {
    const {directionValue, colorOneValue, colorTwoValue} = this.state

    this.setState({
      activeColorOne: colorOneValue,
      activeColorTwo: colorTwoValue,
      activeDirectionValue: directionValue,
    })
  }

  onRenderButtonListContainer = () => {
    const {directionValue} = this.state
    return (
      <ButtonListContainer>
        {gradientDirectionsList.map(each => (
          <GradientDirectionItem
            activeDirectionValue={directionValue === each.value}
            key={each.directionId}
            directionDetails={each}
            onChangeDirection={this.onChangeDirection}
          />
        ))}
      </ButtonListContainer>
    )
  }
  onRenderInputColorContainer = () => {
    const {colorOneValue, colorTwoValue} = this.state

    return (
      <ColorInputMainContainer>
        <ColorInputContainer>
          <ColorDescription>{colorOneValue}</ColorDescription>
          <Input
            type="color"
            value={colorOneValue}
            onChange={this.onChangeColorOne}
          />
        </ColorInputContainer>
        <ColorInputContainer>
          <ColorDescription>{colorTwoValue}</ColorDescription>
          <Input
            type="color"
            value={colorTwoValue}
            onChange={this.onChangeColorTwo}
          />
        </ColorInputContainer>
      </ColorInputMainContainer>
    )
  }

  render() {
    const {activeDirectionValue, activeColorOne, activeColorTwo} = this.state

    return (
      <Container
        colorOne={activeColorOne}
        colorTwo={activeColorTwo}
        direction={activeDirectionValue}
        data-testid="gradientGenerator"
      >
        <MainContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SubHeading>Choose Direction</SubHeading>
          {this.onRenderButtonListContainer()}
          <SubHeading>Pick the Colors</SubHeading>
          {this.onRenderInputColorContainer()}
          <Button type="button" onClick={this.onGenerateColor}>
            Generate
          </Button>
        </MainContainer>
      </Container>
    )
  }
}

export default GradientGenerator
