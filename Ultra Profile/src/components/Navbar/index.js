import React from 'react';
import { NavbarSection , Logo , UlList , ListItem , Anchor , LogoText , LinkSpan } from './style';

const Index = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><LinkSpan to="/">Home</LinkSpan></ListItem>
                    <ListItem><Anchor href="#Work">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#Portfolio">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#Profile">Profile</Anchor></ListItem>
                    <ListItem><Anchor href="#About">About</Anchor></ListItem>
                    <ListItem><LinkSpan to="/contact">Contact</LinkSpan></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    );
};

export default Index;