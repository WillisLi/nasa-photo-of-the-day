import React from 'react';
import styled from 'styled-components';

const Explanation = styled.p`
    font-size: 1.3rem;
    color: darkgrey;
    margin: 50px;
`;

const DescText = styled.div`
    border: 1px solid gray;
    width: 66%;
`;

const Description = props => {
    const { description } = props;

    return (
        <DescText>
            <Explanation>{description.explanation}</Explanation>
        </DescText>
    );
}

export default Description;