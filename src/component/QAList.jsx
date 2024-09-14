import { Accordion, Row } from "react-bootstrap";
import { question } from "../Data";

const QAList = ({ data, deletOneItem }) => {
  const oneDeletItem = (id) => {
    if (data.length >= 1) {
      const index = question.findIndex((item) => item.id === id);
      question.splice(index, 1);
      deletOneItem(question);
    }
  };
  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {data.length >= 1 ? (
          data.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body className="text-start">
                  <div className="px-3 d-inline ">{item.a}</div>
                  <button
                    onClick={() => oneDeletItem(item.id)}
                    className="btn-color"
                  >
                    Delete
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2>Not Found Now</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
