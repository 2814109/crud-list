import { VFC } from "react";
import { Table, Button } from "react-bootstrap";
import { ListType } from "../Types/ListType";
interface Props {
  list: ListType[];
  setList: Function;
}
const CRUDList: VFC<Props> = ({ list, setList }) => {
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
                <ActionSection />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const ActionSection: VFC = () => {
  return (
    <div className="d-flex justify-content-around">
      <Button>edit</Button>
      <Button>delete</Button>
    </div>
  );
};
export default CRUDList;
