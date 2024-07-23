import { TabContent, TabPane, Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"

import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Project = () => {

    const projects = [
        {
            title: "Bank Management System",
            description: "JAVA and SQL",
            imgUrl: projImg1,
        },

        {
            title: "College Managemnt System",
            description: "JAVA and SQL",
            imgUrl: projImg2,
        },

        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg3,
        },

        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg1,
        },

        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg2,
        },

        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Developed and deployed multiple web applications utilizing HTML, CSS, JavaScript, and React. Each project demonstrates strong problem-solving skills, attention to detail, and a commitment to creating responsive, user-friendly interfaces. Proven ability to manage end-to-end development, from concept to deployment, ensuring high-quality results</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav varient="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane> */}
                                {/* <Tab.Pane eventKey="third">Lorem jipsum</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" ></img>
        </section>
    )
}