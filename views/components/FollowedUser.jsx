import React from 'react';

export default function CommentPreview({ user}) {

    return (
        <>
        <li className="col-6 justify-content-between mt-5">
            {user}
            <form 
                    action={`/follow/deleteFollow/${user}?_method=DELETE`}
                    method="POST"
                    className="col-3"
                >
                    <button className="btn btn-primary fa fa-trash" type="submit"></button>
                </form>
            </li>
           
                
           
        </>
    )
}
