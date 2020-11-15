import * as React from 'react';
import InputField from '../components/InputField';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';

interface IAppProps{
}

export interface IWord { 
  word: string;
  count: number;
}

interface IAppState{
  inputBox: string;
  words: Array<IWord>
 
}
class App extends React.Component<IAppProps,IAppState> {
  constructor(props: IAppProps){
    super(props)
    this.state = {
      inputBox: '',
      words: []
    }
  }

  handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {

    // Get the user's input and clean it of punctuation
    const {inputBox} = this.state;
    let wordMap = new Map<string,number>();
    let regex:RegExp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let cleanedInput:string = inputBox.replace(regex, '');

  // Store each word and it's frequency into a map
    let wordsArr: Array<string> = cleanedInput.trim().split(/[\s+]/)
    wordsArr.forEach( (key:string) => {
      if( key !== ""){
        let value : number | undefined = wordMap.get(key);
        wordMap.set(key, value? value + 1 : 1) 
      }
    })
    
  // Lastly update the state to reflect each word and its frequency
    let finalWords : Array<IWord> = []
    for (let [key,value] of wordMap ) {
      const val: IWord = {
        word: key,
        count: value
      }
      finalWords.push(val)
    }

    this.setState({words: finalWords})
  }

  handleOnTextChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {

    this.setState({ inputBox: event.currentTarget.value.toLowerCase() })
    
  }

  alphabeticalSort = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const {words} = this.state;
    words.sort( (a,b) => {
      return a.word.localeCompare(b.word);
    })
    this.setState({words: words})
  }

  numericalSort = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const {words} = this.state;
    words.sort( (a,b) => {
      return b.count - a.count;
    })
    this.setState({words: words})
  }


  render() : JSX.Element {
    const {words} = this.state;
    return (
    <div className="tc">
      <h1 className='f1 white'>Text Analyzer</h1>
      <button className='f6 link dim ph3 pv2 mb2 dib white bg-black mr1' onClick={this.alphabeticalSort} > Sort Alphabetically </button>
      <button className='f6 link dim ph3 pv2 mb2 dib white bg-black' onClick={this.numericalSort}> Sort By Frequency </button>
      <InputField onTextChange = {this.handleOnTextChange} />
      <button className='f6 link dim ph3 pv2 mb2 dib white bg-black' onClick = {this.handleOnClick}> Analyze </button>
      <Scroll>
        <CardList words = {words} />
      </Scroll>
    </div>
  );
    }
}

export default App;
