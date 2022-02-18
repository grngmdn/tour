import React, { useState } from 'react'

function Tour({id, image, info, price, name}) {

    const [readMore, setReadMore] = useState(false)

  return (
    <div>
        <article>
            <img src={image} width="100px" />
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4>$ {price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "less info" : "more info"}
                    </button>
                </p>
                <button>Not interested</button>
            </footer>
        </article><br />
    </div>
  )
}

export default Tour