import React from 'react';
import { AboutSection , AboutInfo , InfoTitle , TitleSpan , InfoDir , InfoDesc , InfoDescAnchor } from './style'

const About = () => {
    return (
        <AboutSection id="About">
            <div class="container">
                <AboutInfo>
                    <InfoTitle><TitleSpan>This is</TitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescAnchor href="#">explicabo</InfoDescAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    );
};

export default About;