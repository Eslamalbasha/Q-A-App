import { Row, Form, Col } from "react-bootstrap";

const FormInput = ({ onAdd }) => {
  const addNewItem = () => {
    onAdd();
  };
  return (
    <Row>
      <Row className="mb-3">
        <Col sm="5">
          <Form.Control type="email" placeholder="Enter email" />
        </Col>
        <Col sm="5">
          <Form.Control type="password" placeholder="Password" />
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
