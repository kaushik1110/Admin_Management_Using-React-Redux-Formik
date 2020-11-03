import React from 'react'

function TextError(props) {
    return (
        <div style={{ color: "red", fontWeight: "normal"  }}>
            {props.children}
        </div>
    )
}

export default TextError