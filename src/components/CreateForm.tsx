import { VFC, useState, memo, useCallback } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  setListElement: Function;
}

const CreateForm: VFC<Props> = ({ setListElement }) => {
  const [text, setText] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setListElement(text);
    setText("");
  }, [text, setListElement]);
  return (
    <Form>
      <Form.Group className="mb-3 " controlId="formTask">
        <Form.Label>Task</Form.Label>
        <div className="d-flex">
          <Form.Control
            className="w-75"
            type="task"
            placeholder="Enter Task"
            value={text}
            onChange={handleChange}
          />
          <Button className="w-25 mx-3" onClick={handleClick}>
            Add
          </Button>
        </div>
        <Form.Text className="text-muted">Task Form</Form.Text>
      </Form.Group>
    </Form>
  );
};
export default memo(CreateForm);
