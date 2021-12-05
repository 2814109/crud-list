import { VFC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ListType } from "../Types/ListType";

interface Props {
  list: ListType[];
  setList: Function;
}

const CreateForm: VFC<Props> = ({ list, setList }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setList([...list, { ...list, id: list.length, task: text }]);
  };
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
export default CreateForm;
