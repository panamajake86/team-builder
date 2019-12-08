import React from "react";

const Team = props => {
    console.log(props);
    return (
        <div className="team-list">
            {props.teamList.map(people => {
                return (
                    <div className="team" key={people.id}>
                        <h2>{people.title}</h2>
                        <p>{people.email}</p>
                        <p>{people.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;