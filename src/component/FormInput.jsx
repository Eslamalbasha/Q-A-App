import { useState } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { question } from "../Data";

const FormInput = ({ onAdd }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const addNewItem = () => {
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
  };
  return (
    <Row>
      <Row className="mb-3">
        <Col sm="5">
          <Form.Control
            value={qu}
            onChange={(e) => setQu(e.target.value)}
            type="text"
            placeholder="Enter Qustion"
          />
        </Col>
        <Col sm="5">
          <Form.Control
            value={an}
            onChange={(e) => setAn(e.target.value)}
            type="text"
            placeholder="Enter Answer"
          />
        </Col>
        <Col sm="2">
          <button
            onClick={addNewItem}
            className="btn-color w-100"
            type="submit"
          >
            Submit
          </button>
        </Col>
      </Row>
    </Row>
  );
};

export default FormInput;
