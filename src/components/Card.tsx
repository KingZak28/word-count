import * as React from 'react';

interface ICardProps {
    word: string,
    count: number
}

const Card:React.FunctionComponent<ICardProps>   = ({word, count}) => {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <h2>{word}</h2>
          <p>{count}</p>
        </div>
      </div>
    );
  };
  
  export default Card;