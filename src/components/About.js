import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState (
    //     {
    //         color: 'White',
    //         backgroundColor: 'Black'
    //     }
    // )
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }

  return (
    <div className='container' style={myStyle}>
        <div>{myStyle.color}</div>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze Your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, character count or 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count and word coumt statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            This is word counter app works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
            </div>
            </div>
        </div>
        </div>
       

    </div>
  )
}
