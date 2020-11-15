import * as React from 'react';

// ? Added because we may not have any children to render
type Props = {
    children?: JSX.Element
}

const Scroll = (props: Props) => {
    return (
        <div style={{overflow:'scroll', border:'1px ridge black', height:'800px'}}>
            {props.children}    
        </div>
    )
}

export default Scroll;