import {Component} from 'react'

import './App.css'

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

class App extends Component {
  state = {language: 'English'}

  onChangeLanguage = languageChanged => {
    this.setState({
      language: languageChanged,
    })
  }

  render() {
    const {language} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <div className="buttons-container">
          {languageGreetingsList.map(eachObject => (
            <>
              {eachObject.buttonText === language ? (
                <button className="selected-button-element" type="button">
                  {eachObject.buttonText}
                </button>
              ) : (
                <button
                  className="button-element"
                  type="button"
                  onClick={() => this.onChangeLanguage(eachObject.buttonText)}
                >
                  {eachObject.buttonText}
                </button>
              )}
            </>
          ))}
        </div>
        <ul className="output-container">
          {languageGreetingsList.map(eachObject => (
            <>
              {eachObject.buttonText === language && (
                <li className="list-item-image" key={eachObject.id}>
                  <img
                    src={eachObject.imageUrl}
                    className="image"
                    alt={eachObject.imageAltText}
                    key={eachObject.id}
                  />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
