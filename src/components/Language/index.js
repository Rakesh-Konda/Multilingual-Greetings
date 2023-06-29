import {Component} from 'react'
import {Un, Li, Image, DivCen, Button} from './styledComponent'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const apistatusConstant = {
  english: 'ENGLISH',
  telugu: 'TELUGU',
  tamil: 'TAMIL',
}

class Language extends Component {
  state = {apistatus: apistatusConstant.english, color: false}

  But = status => {
    this.setState(prevState => ({
      color: !prevState.color,
      apistatus: status.toUpperCase(),
    }))
  }

  ImageView = data => (
    <div>
      <Image src={data.imageUrl} alt={data.imageAltText} />
    </div>
  )

  Finale = () => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apistatusConstant.english:
        return this.ImageView(languageGreetingsList[0])
      case apistatusConstant.tamil:
        return this.ImageView(languageGreetingsList[1])
      case apistatusConstant.telugu:
        return this.ImageView(languageGreetingsList[2])
      default:
        return null
    }
  }

  render() {
    const {color} = this.state
    return (
      <DivCen>
        <h1>Multilingual Greetings</h1>
        <Un>
          {languageGreetingsList.map(each => (
            <Li key={each.id}>
              <Button
                onClick={() => this.But(each.buttonText)}
                type="button"
                color={color}
              >
                {each.buttonText}
              </Button>
            </Li>
          ))}
        </Un>
        {this.Finale()}
      </DivCen>
    )
  }
}
export default Language
