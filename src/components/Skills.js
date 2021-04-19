import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            judul: "Skills",
            skills: ["The ability to work with a wide variety of people", 
                     "Time management and ability to prioritize",
                     "Understanding the digital impact on businesses", 
                     "Ability to build, sustain and expand a network of people",
                     "Ability to solve complex problems"],

        };
    }

    render() {
        return (
            <div className="columns Coba is-vcentered" id="skills">
                <div className="column is-half is-offset-one-quarter">
                    <h2 className="title is-2">{this.state.judul}</h2>
                    {this.state.skills.map((value, index) => {
                        return (<p> <FontAwesomeIcon icon={faCheckCircle} color="green" /> {value}</p>);
                    })}

                </div>
            </div>
        );
    }
}