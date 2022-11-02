import React from 'react';
import Main from './components/Main.jsx'

export default function Profile(props) {
    return (
        <Main>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <div>
                            <p><strong>User Name</strong>: {props.user.userName}</p>
                            <p><strong>Email</strong>: {props.user.email} </p>
                            <a href="/logout" className="col-3 btn btn-primary">Logout</a>
                        </div>
                        <div className="mt-5">
                            <h2>Add a post</h2>
                            <form action="/post/createPost" enctype="multipart/form-data" method="POST">
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" />
                                </div>
                                <div className="mb-3">
                                    <label for="caption" className="form-label">Caption</label>
                                    <textarea className="form-control" id="caption" name="caption"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="imgUpload" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="imageUpload" name="file" />
                                </div>
                                <button type="submit" className="btn btn-primary" value="Upload">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul className="row list-unstyled">

                            {props.posts.map(post =>
                                <li className="col-6 justify-content-between mt-5">
                                    <a href={`/post/${post._id}`}>
                                        <img className="img-fluid" src={post.image}></img>
                                    </a>
                                </li>
                            )}
                        </ul>
                        <div className="row justify-content-center mt-5">
                            <a className="btn btn-primary" href="/feed">Return to Feed</a>
                        </div>
                    </div>
                </div>
            </div>
        </Main >
    )
}

