import React from "react";

const TeamForm = props => {
    const [team, setTeam] = React.useState({ title: "", email: "", role: "" });

    const handleChange = evt => {
        setTeam({...team, [evt.target.name]: evt.target.value});
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.addTeamFn(team);
        setTeam({title: "", email: "", role: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Teammate</label>
            <input id="title" value={team.title} name="title" type="text" onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input id="email" value={team.body} name="email" type="text" onChange={handleChange} />
            <label htmlFor="role">Role</label>
            <input id="role" value={team.body} name="role" type="text" onChange={handleChange} />
            <button type="submit">Add Teammate</button>
        </form>
    );
};

export default TeamForm;