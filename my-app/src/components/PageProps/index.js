
import React, { useState } from 'react';

export default function PageContent(){
    const [greeting, setPageContent] = useState('Welcome! React state is awesome!');

}
const pageContent=(props)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}

export default PageContent;