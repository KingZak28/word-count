import * as React from 'react';

interface IInputFieldProps {
    onTextChange(event: React.SyntheticEvent<HTMLInputElement>):void;
}
const InputField = ({onTextChange}:IInputFieldProps) => {
    return (
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='Enter your text'
          onChange = {onTextChange}
        />
      </div>
    );
  };
  
  export default InputField;