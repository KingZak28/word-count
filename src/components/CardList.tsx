import * as React from 'react';
import Card from './Card';
import {IWord} from '../containers/App';

const CardList = ({words}: {words: Array<IWord>}) => {
    return(
        <div>
            {
                words.map((word, i) => {
                    return (
                        <Card 
                        key = {i}
                        word = {word.word}
                        count = {word.count}
                        />
                    );
                })
            
            }
        </div>
    )
}

export default CardList;