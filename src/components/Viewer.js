import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./Viewer.css";
import ContentPlayer from "./ContentPlayer";
import ContentList from "./ContentList";
import courses from "../assets/jsons/courses.json";

const courseMap = courses.reduce((initial, current) => {
  const contentsMap = current.contents.reduce(
    (totalContent, currentContent) => {
      totalContent[currentContent.slug] = currentContent;
      return totalContent;
    },
    {}
  );
  initial[current.slug] = {
    ...current,
    contentsMap,
  };
  return initial;
}, {});

function Viewer() {
  const params = useParams();
  const navigate = useNavigate();
  const courseSlug = params.course_slug;
  const course = courseMap[courseSlug];
  const totalContents = course.contents.length;
  const contentToPlay = params.content_slug
    ? course.contentsMap[params.content_slug]
    : course.contents[0];
  const [currentContent, setCurrentContent] = useState(contentToPlay);

  function playPrev() {
    if (currentContent.index > 0) {
      navigate(course.contents[currentContent.index - 1].slug);
      setCurrentContent(course.contents[currentContent.index - 1]);
    }
  }

  function playNext() {
    if (currentContent.index < totalContents - 1) {
      navigate(course.contents[currentContent.index + 1].slug);
      setCurrentContent(course.contents[currentContent.index + 1]);
    }
  }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="course-name">{course.title}</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <ContentPlayer
              content={currentContent}
              playPrev={playPrev}
              playNext={playNext}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <ContentList
              contentList={course.contents}
              currentContent={currentContent}
              setCurrentContent={setCurrentContent}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Viewer;
