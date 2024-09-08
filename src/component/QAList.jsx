import { Accordion, Row } from "react-bootstrap";

const QAList = ({ data }) => {
  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {data.length >= 1 ? (
          data.map((item) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body className="text-start">
                  <div className="px-3 d-inline ">Answer</div>
                  <button className="btn-color">Delete</button>
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
