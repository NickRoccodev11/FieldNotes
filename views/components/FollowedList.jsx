import React from 'react';
import FollowedUser from './FollowedUser';

export default function FollowedList({  user }) {
    return (
        <>
        <span> Following: </span>
        <ul className="column list-unstyled">
            {user.following.map((user, idx) => <FollowedUser
                key={idx}
                user={user}
            />
            )}
        </ul>
        </>
    )
}

