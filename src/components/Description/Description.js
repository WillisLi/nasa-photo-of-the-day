import React from 'react';
import './Description.css';

const Description = props => {
    const { description } = props;

    return (
        <div className = "descText">
            <span className = "title">{description.title}</span>
            <span className = "date">{description.date}</span>
            <span className = "explanation">{description.explanation}</span>
        </div>
    );
}

export default Description;