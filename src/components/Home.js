import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import courses from "../assets/jsons/courses.json";
import moment from "moment";

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          {courses.map((course, i) => (
            <Col key={i} xs={12} sm={12} md={6} lg={4} xl={3}>
              <Link className="link" to={"viewer/" + course.slug}>
                <Card className="course-card">
                  <Card.Img variant="top" src={course.thumbnail} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.desc}</Card.Text>
                    <Card.Subtitle>
                      Duration:{" "}
                      {moment.utc(course.duration * 1000).format("HH:mm:ss")}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Home;
