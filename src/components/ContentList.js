import "./ContentList.css";
import { ListGroup, Card } from "react-bootstrap";

function ContentList({ contentList }) {
  return (
    <>
      <ListGroup>
        {contentList.map((content, i) => (
          <ListGroup.Item key={i}>
            <Card className="content-list-item-container">
              <Card.Body>
                <Card.Title>{content.title}</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
export default ContentList;
