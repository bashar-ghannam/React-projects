import React, { Component } from 'react';
import { ContactSection , ContactTitle , TitleSpan , ContactForm , FormInput , 
    InputText , InputEmail , InputEx , TextArea , InputSubmit} from './style.js';

import Footer from './../Footer/index'




class Contact extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                <ContactSection>
                    <div className="container">
                        <ContactTitle><TitleSpan>Drop </TitleSpan>Me A line</ContactTitle>
                        <ContactForm onSubmit={this.handleSubmit}>
                            <FormInput>
                                <InputText type="text" placeholder="Your Name" />
                                <InputEmail type="email" placeholder="Your Email" />
                            </FormInput>
                            <InputEx type="text" placeholder="Your Subject" />
                            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                            <InputSubmit type="submit" value="Send Message" />
                        </ContactForm>
                    </div>
                </ContactSection>
                <Footer />
            </React.Fragment>
        );
    }
};

export default Contact;