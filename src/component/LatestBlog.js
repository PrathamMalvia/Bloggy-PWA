import React from 'react'

function LatestBlog(props) {
    return (
        <a href={'/detail/' + props.blogid}>
            <div className='row'>
                <div className="col-lg-8">
                    <img className='blogCardImg' src={props.image} alt="bg" />
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                {props.title}
                            </h1>
                        </div>
                        <div className="col-12">
                            <p>
                                {props.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default LatestBlog
