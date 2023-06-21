import "./ContentList.css";
import { Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";

function ContentList({ contentList, currentContent, setCurrentContent }) {
  return (
    <>
      <ListGroup className="content-list-container">
        {contentList.map((content, i) => (
          <ListGroup.Item key={i} className="content-list-item-container">
            <Link
              className="link"
              to={content.slug}
              onClick={() => setCurrentContent(content)}
            >
              <Card
                className={`content-list-item-card${
                  content.slug === currentContent.slug ? " active" : ""
                }`}
              >
                <Card.Body>
                  <Card.Text>{content.title}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
export default ContentList;
