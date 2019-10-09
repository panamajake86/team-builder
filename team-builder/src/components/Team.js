import React from "react";

const Team = props => {
    return (
        <div className="team-list">
            {props.teamList.map(people => {
                return (
                    <div className="team" key={people.id}>
                        <h2>{people.name}</h2>
                        <p>{people.body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;