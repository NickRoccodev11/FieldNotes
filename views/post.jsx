import React from 'react';
import Main from './components/Main.jsx'
import CommentList from './components/CommentList'

export default function Post({ post, user, comments }) {
    //DATE FORMATTING
    Date.prototype.ymd = function () {
        var mm = this.getMonth() + 1;
        var dd = this.getDate();
        return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        dd > 9 ? '' : '0' + dd].join('/')
    }
// LIKES FORMATTING
function likesRender(likesArr) {
    let statement = ''
    switch (likesArr.length) {
        case 0:
            statement = ''
            break
        case 1:
            statement = `${likesArr[0]} likes this`
            break
        case 2: 
            statement = `${likesArr[0]} and ${likesArr[1]} like this`
            break
        case 3:
            statement = `${likesArr[0]}, ${likesArr[1]} and ${likesArr[2]} like this`
            break
        default:
            statement = `${likesArr[0]}, ${likesArr[1]} and ${likesArr.length - 2} others like this`
    }
    return statement
}

    return (
        <Main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <h2> {post.title}</h2>
                        <h4> {post.createdAt.ymd()}</h4>
                        <img className="img-fluid" src={post.image} />
                        <div className="row justify-content-between">
                            <form
                                className="col-1"
                                action={`/post/likePost/${post.id}?_method=PUT`}
                                method="POST"
                            >
                                <button className="btn btn-primary fa fa-heart" type="submit"></button>
                            </form>
                            <h3 className="col-3">
                                {likesRender(post.likes)} 
                             
                                </h3>
                            {post.user == user.id && (
                                <form
                                    action={`/post/deletePost/${post.id}?_method=DELETE`}
                                    method="POST"
                                    className="col-3"
                                >
                                    <button className="btn btn-primary fa fa-trash" type="submit"></button>
                                </form>
                            )}

                        </div>
                    </div>
                    <div className="col-3 mt-5">
                        <p>{post.caption}</p>
                    </div>
                    <div className="mt-5">
                        <h2>Add a comment</h2>
                        <form action={`/comment/createComment/${post._id}`} method="POST">
                            <div className="mb-3">
                                <label htmlFor="comment" className="form-label">Comment</label>
                                <input type="text" className="form-control" id="comment" name="comment" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <CommentList comments={comments} user={user}  /> 
                       
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

