import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./component/FormInput";
import QAList from "./component/QAList";
import { question } from "./Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(question);
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-conyent-center">
          <Col sm="4">
            <div className="fs-4  text-center py-2"> Questions and Answers</div>
          </Col>
          <Col sm="8">
            <FormInput />
            <QAList data={data} />
            <button className="btn-color w-100 my-3 ">Delete All</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
