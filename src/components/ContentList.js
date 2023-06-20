import "./ContentList.css";
import { Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";

function ContentList({
  contentList,
  setCurrentContent,
}) {
  return (
    <>
      <ListGroup>
        {contentList.map((content, i) => (
          <ListGroup.Item key={i}>
            <Link
              className="link"
              to={content.slug}
              onClick={() => setCurrentContent(content)}
            >
              <Card className="content-list-item-container">
                <Card.Body>
                  <Card.Title>{content.title}</Card.Title>
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
