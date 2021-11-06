import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../../components/button';

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>— {speaker}</Speaker>
            <Button onClick={onUpdate}>Quote no Jutsu!</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    margin: 0;
    color: yellow; 
    font: bold 2.5em Alegreya, sans-serif;
    -webkit-text-stroke: 1.5px black;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;
