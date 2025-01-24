import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <a target='_blank' rel="noreferrer"  href="https://www.tabla.is/" style={{textDecoration: 'none'}}>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TABLA"
              description="CAPTABLE MANAGEMENT"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
            </a>
          </Col>

          <Col md={4} className="project-card">
          
          <a target='_blank' rel="noreferrer"  href="https://dehive.finance/" style={{textDecoration: 'none'}}>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DEHIVE FINANCE"
              description="CRYPTO INDEXES"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
            </a>
          </Col>

          <Col md={4} className="project-card">
          <a target='_blank' rel="noreferrer"  href="https://www.orderbook.io/" style={{textDecoration: 'none'}}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ORDERBOOK"
              description="TOKEN EXCHANGE AND ICO"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
            </a>
          </Col>

          <Col md={4} className="project-card">
          <a target='_blank' rel="noreferrer"  href="https://leaguedao.com/nomo-football" style={{textDecoration: 'none'}}>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NOMO FANTASY SPORTS"
              description="NFT GAME"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
            </a>
          </Col>

          <Col md={4} className="project-card">
             <a target='_blank' rel="noreferrer" href="https://moola.market/" style={{textDecoration: 'none'}}>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="MOOLA MARKET"
              description="LENDING AND BORROWING PLATFORM"
            />
            </a>
          </Col>

          <Col md={4} className="project-card">
          <a target='_blank' rel="noreferrer"  href="https://satoshisync.com/" style={{textDecoration: 'none'}}>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SATOSHISYNC"
              description="BITCOIN BRC-20 AND RUNES MULTICHAIN BRIDGE"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
