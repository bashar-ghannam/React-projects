import styled from "styled-components";

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center
`;

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`;

export const TitleSpan = styled.span`
    font-weight: normal
`;

export const ContactForm = styled.form`
    width: 70%;
    margin: auto;
`;

const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`;

export const FormInput = styled.div`
    overflow: hidden
`;

export const InputText = styled(Input)`
    float: left;
    width: 49%
`;

export const InputEmail = styled(Input)`
    float: right;
    width: 49%
`;

export const InputEx = styled(Input)`
    width: 100%;
`;

export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`;

export const InputSubmit = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`;