import React from "react";

const ScoreBoard = ({ users }) => {

    users.sort((a, b) => (a.score < b.score) ? 1 : -1);

    const scoreRows = users.map(user => {
        return (
            <tr key={user._id}>
                <td>{user.score}</td>
                <td>{user.username}</td>
                <td>{user.email} mins</td>
            </tr>
        )
    })

    return (
        <article>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Username</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreRows}
                </tbody>
            </table>
        </article>
    )
}

export default ScoreBoard;