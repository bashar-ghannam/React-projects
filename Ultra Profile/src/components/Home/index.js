import React from 'react';
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , Homedesc , DescSpan , HomeBtn } from './style';

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>BASHAR GHANNAM</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <Homedesc>
                        Iam a professional <DescSpan>UX Designer</DescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    );
};

export default Home;