import React from 'react'

import Typing from 'react-typing-animation';

export default function TypingAnimation(props) {
    var { base, content } = props;

    return (
        <Typing cursor={<p className='has-text-white' style={{ display: 'inline' }}>|</p>} style={{ display: 'inline' }}>
            {base}
            {content.slice(0, -1).map((elem) => (
                <React.Fragment key={elem}>
                    <div style={{ display: 'inline' }}>{elem}.</div>
                    <Typing.Backspace count={elem.length + 1} speed={50} delay={1000} />
                </React.Fragment>
            ))}
            {content[content.length - 1]}.
        </Typing>
    )
}

TypingAnimation.defaultProps = {
    base: 'Hello',
    content: [' world']
}