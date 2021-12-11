import { VFC, useState, useCallback, useMemo, memo } from "react";
import { Container } from "react-bootstrap";
import CRUDList from "./CRUDList";
import CreateForm from "./CreateForm";
import { ListType } from "../Types/ListType";

const Main: VFC = () => {
  const testData: ListType[] = useMemo((): ListType[] => {
    const data: ListType[] = [...Array(10)].map((_, index) => {
      return { id: index, task: `task${index}` };
    });
    return data;
  }, []);
  const [list, setList] = useState<ListType[]>(testData);

  const setListElement = useCallback(
    (text: string): void => {
      setList([...list, { ...list, id: list.length, task: text }]);
    },
    [list]
  );

  const onDelete = useCallback((id: number): void => {
    setList((list) => {
      return list.filter((todoItem) => todoItem.id !== id);
    });
  }, []);
  return (
    <Container className="w-50">
      <CreateForm setListElement={setListElement} />
      <CRUDList list={list} onDelete={onDelete} />
    </Container>
  );
};
export default memo(Main);
