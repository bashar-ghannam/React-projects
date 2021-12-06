import React , { useState , useEffect } from 'react';
import axios from 'axios'; 
import { SocialSection , Social , SocialIcon , SocialDesc , SocialSpan1 , SocialSpan2 } from './style'

const SocialMedia = () => {
    const [ socials , setSocial ] = useState([])
    useEffect ( () => {
        axios.get('js/data.json').then(res => {
            setSocial (res.data.social)
        } )
    } , [] )
    const soicalList = socials.map((social) => {
        return(
            <Social key={social.id} item={social.id} >
                <SocialIcon className={social.icon}></SocialIcon>
                <SocialDesc>
                    <SocialSpan1>{social.title}</SocialSpan1>
                    <SocialSpan2>{social.body}</SocialSpan2>
                </SocialDesc>
            </Social>
        )
    })
    return (
        <SocialSection id="SocialMedia">
            {soicalList}
        </SocialSection>
    );
};

export default SocialMedia;