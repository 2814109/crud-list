import { VFC, memo } from "react";
import { Table, Button } from "react-bootstrap";
import { ListType } from "../Types/ListType";
interface Props {
  list: ListType[];
  onDelete: Function;
}
const CRUDList: VFC<Props> = ({ list, onDelete }) => {
  console.log(list);
  return (
    <Table>
      <thead>
        <tr>
          <th className="col-2">ID</th>
          <th className="col-5">Task</th>
          <th className="col-5 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.task}</td>
              <td>
                <ActionSection key={data.id} id={data.id} onDelete={onDelete} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

interface ActionSectionProps {
  id: number;
  onDelete: Function;
}
const ActionSection: VFC<ActionSectionProps> = ({ id, onDelete }) => {
  return (
    <div className="d-flex justify-content-around">
      <Button>edit</Button>
      <Button onClick={() => onDelete(id)}>delete</Button>
    </div>
  );
};
export default memo(CRUDList);
