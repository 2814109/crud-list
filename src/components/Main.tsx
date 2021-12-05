import { VFC, useState } from "react";
import { Container } from "react-bootstrap";
import CRUDList from "./CRUDList";
import CreateForm from "./CreateForm";
import { ListType } from "../Types/ListType";

const Main: VFC = () => {
  const testData: ListType[] = [...Array(10)].map((_, index) => {
    return { id: index, task: `task${index}` };
  });
  const [list, setList] = useState<ListType[]>(testData);

  return (
    <Container className="w-50">
      <CreateForm setList={setList} />
      <CRUDList list={list} setList={setList} />
    </Container>
  );
};
export default Main;
