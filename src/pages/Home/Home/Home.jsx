/* eslint-disable no-unused-vars */
import React from 'react';
import Medium from '../Medium/Medium';
import Technology from '../Technology/Technology';
import BanglaGPT from '../BanglaGPT/BanglaGPT';
import Prompt from '../Prompt/Prompt';
import Try from '../Try/Try';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Medium></Medium>
            <Technology></Technology>
            <BanglaGPT></BanglaGPT>
            <Prompt></Prompt>
            <Pricing></Pricing>
            <Try></Try>
        </div>
    );
};

export default Home;