import React from 'react';
import Main from './components/Main.jsx'

export default function Feed(props) {
    return (
        <Main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <ul className="row list-unstyled">
                        {props.posts.map(post =>
                            <li className="col-6 justify-content-between mt-5">
                                <a href={`/post/${post._id}`}>
                                    <img className="img-fluid" src={post.image}></img>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Main>
    )
}

