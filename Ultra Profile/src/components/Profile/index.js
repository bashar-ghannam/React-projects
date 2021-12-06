import React , { useState , useEffect } from 'react';
import axios from 'axios'; 
import { ProfileSkillsTitleSpan , ProfileSkillsTitle , ParentSpan , BarParent , BarPerc
 , BarTitle , SkillsBar , SkillsDesc , ItemSpan , ProfileItem , ProfileList , ProfileSection
 , ProfileSkillsSection , SkillsSection , ItemSpanWeb } from './style'


const Profile = () => {
    const [ personalInfo , setPersonalInfo ] = useState([])
    const [ skills , setSkills ] = useState([])
    useEffect ( () => {
        axios.get('js/data.json').then(res => {
            setPersonalInfo (res.data.profile.personalInfo);
            setSkills (res.data.profile.skills);
        } )
    } , [] )
    const ProfileInfo = personalInfo.map( (item) => 
    {
        if ( item.info === "Website"){
            return (
                <ProfileItem key={item.id}>
                    <ItemSpan>{item.info}</ItemSpan>
                        <ItemSpanWeb>{item.value}</ItemSpanWeb>
                </ProfileItem>
            )
        }
        else {
            return (
                <ProfileItem key={item.id}>
                    <ItemSpan>{item.info}</ItemSpan>
                        <span>{item.value}</span>
                </ProfileItem>
            )
        }
        
    })

    const ProfileSkills = skills.map( (item) => {
        return ( 
            <SkillsBar key={item.id} >
                <BarTitle>{item.skill}</BarTitle>
                <BarPerc>{item.perc}</BarPerc>
                <BarParent>
                    <ParentSpan width={item.perc}></ParentSpan>
                </BarParent>
            </SkillsBar>
        )
    })

    return (
        <ProfileSkillsSection id="Profile" >
            <div className="container">
                <ProfileSection>
                    <ProfileSkillsTitle><ProfileSkillsTitleSpan>
                        My </ProfileSkillsTitleSpan>Profile</ProfileSkillsTitle>
                    <ProfileList>
                        {ProfileInfo}
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <ProfileSkillsTitle>Some <ProfileSkillsTitleSpan>
                        skills</ProfileSkillsTitleSpan></ProfileSkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {ProfileSkills}
                </SkillsSection>
            </div>
        </ProfileSkillsSection>
    );
};

export default Profile;