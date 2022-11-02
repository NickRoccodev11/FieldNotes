import React from 'react';
import Main from './components/Main.jsx'

export default function Post(props) {
    return (
        <Main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <h2> {props.post.title}</h2>
                        <img className="img-fluid" src={props.post.image} />
                        <div className="row justify-content-between">
                            <form
                                className="col-1"
                                action={`/post/likePost/${props.post.id}?_method=PUT`}
                                method="POST"
                            >
                                <button className="btn btn-primary fa fa-heart" type="submit"></button>
                            </form>
                            <h3 className="col-3">Likes: {props.post.likes} </h3>
                            {props.post.user == props.user.id && (
                                <form
                                    action={`/post/deletePost/${props.post.id}?_method=DELETE`}
                                    method="POST"
                                    className="col-3"
                                >
                                    <button className="btn btn-primary fa fa-trash" type="submit"></button>
                                </form>
                            )}

                        </div>
                    </div>
                    <div className="col-3 mt-5">
                        <p>{props.post.caption}</p>
                    </div>
                    <div className="col-6 mt-5">
                        <a className="btn btn-primary" href="/profile">Return to Profile</a>
                        <a className="btn btn-primary" href="/feed">Return to Feed</a>
                    </div>
                </div>
            </div>
        </Main>
    )
}

