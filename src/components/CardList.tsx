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
                        word = {words[i].word}
                        count = {words[i].count}
                        />
                    );
                })
            
            }
        </div>
    )
}

export default CardList;