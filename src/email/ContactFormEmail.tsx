import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
    firstName: string,
    lastName: string,
    senderEmail: string,
    phone: string, 
    message: string
}

export const ContactFormEmail = ({ firstName, lastName, senderEmail, phone, message } : ContactFormEmailProps) => (
    <Html>
        <Head/>
        <Preview>New message from your portfolio site.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={"/dachshund.png"}
                    width="170"
                    height="50"
                    alt="dachshund"
                    style={logo}
                />
                <Text style={paragraph}>Hi Florencia,</Text>
                <Text style={paragraph}>
                You have received a new message from your portfolio from {firstName} {lastName} ({senderEmail}):
                &apos;{message}&apos;
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} href={`${phone}`}>Contact with {firstName}</Button>
                </Section>
                <Hr style={hr}/>
                <Text style={footer}>Copyright © 2024 Florencia Rueda Sanchez, All rights reseved</Text>
            </Container>
        </Body>
    </Html>
);

export default ContactFormEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = { margin: "0 auto" };

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px"
};

const btnContainer = { textAlign: "center" as const };

const button = {
    backgroundColor: "#C5AB9B",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px"
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0"
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
