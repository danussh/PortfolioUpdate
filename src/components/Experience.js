import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { Container, Row } from "react-bootstrap";
import { SiWorkplace } from "react-icons/si";

const Experience = () => {
    return (
        <Container fluid className="project-section">

            <Container>
                <h1 className="project-heading">
                    My Work <strong className="purple">Experience </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            animate={true}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="January 2022 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SiWorkplace />}
                        >
                            <h5 className="vertical-timeline-element-title">Member Technical Staff</h5>
                            <h3 className="vertical-timeline-element-subtitle">Athenahealth</h3>
                            <p>
                            In part of Document processing team in athenahealth for developing a Data Capturing Tool.This tool will Capture data present on the image usingthe rectangular selector that's drawn over the image. Auto-populate  captured/selected data retrieved from document
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="june 2020 - january 2022"
                            contentStyle={{ background: 'rgb(243 33 111)', color: '#fff' }}
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<SiWorkplace />}
                        >
                            <h5 className="vertical-timeline-element-title">Software Developer</h5>
                            <h3 className="vertical-timeline-element-subtitle">iLink Digital</h3>
                            <p>
                                Worked as a  Full-Stack developer For CRM Tool,a Product of DealerSocket Converted a Existing CRM tool built is ASP.Net To React Js
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="July 2020-April 2021"
                            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<SiWorkplace />}
                        >
                            <h5 className="vertical-timeline-element-title">Full Stack Developer Trainee</h5>
                            <h3 className="vertical-timeline-element-subtitle">Guvi Geeks | IIT Madras Incubated</h3>
                            <p>
                            Hands-on Experience with React JS, HTML, CSS,Javascript, Node JS and Mongo DBDeveloping a fully-fledged website with REACT JS asa Frontend Stack along with JWT authentication.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Nov 2019 - May 2020"
                            iconStyle={{ background: 'rgb(240 117 59)', color: '#fff' }}
                            contentStyle={{ background: 'rgb(240 117 59)', color: '#fff' }}
                            icon={<SiWorkplace />}
                        >
                            <h5 className="vertical-timeline-element-title">Programmer Analyst Trainee</h5>
                            <h3 className="vertical-timeline-element-subtitle">Cognizant</h3>
                            <p>
                            Hands-on Experience with IBM Mainframe.
                            </p>
                        </VerticalTimelineElement>
                       
                        <VerticalTimelineElement
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<SiWorkplace />}
                        />
                    </VerticalTimeline>
                </Row>
            </Container>
        </Container>
    )
}

export default Experience