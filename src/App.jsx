import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./component/FormInput";
import QAList from "./component/QAList";
import { question } from "./Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(question);
  const addItem = () => {
    setData([...question]);
  };
  const deletAllItem = () => {
    question.splice(0, question.length);
    setData([]);
  };
  const deletOneItem = (items) => {
    setData([...items]);
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-conyent-center">
          <Col sm="4">
            <div className="fs-4  text-center py-2"> Questions and Answers</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} />
            <QAList data={data} deletOneItem={deletOneItem} />
            {data.length >= 1 ? (
              <button onClick={deletAllItem} className="btn-color w-100 my-3 ">
                Delete All
              </button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
