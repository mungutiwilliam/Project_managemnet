import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import './agent.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Aside from "./Aside";
export default function Flag() {
  const collator = useCollator({ numeric: true });
  async function load({ signal }) {
    const res = await fetch("https://swapi.py4e.com/api/people/?search", {
      signal,
    });
    const json = await res.json();
    return {
      items: json.results,
    };
  }
  async function sort({ items, sortDescriptor }) {
    return {
      items: items.sort((a, b) => {
        let first = a[sortDescriptor.column];
        let second = b[sortDescriptor.column];
        let cmp = collator.compare(first, second);
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    };
  }
  const list = useAsyncList({ load, sort });
  return (
    <div className="agent">
    <div className="sidenave"><Aside/></div>
    <div className="table">
    <Table
      aria-label="Example static collection table"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <Table.Header>
        <Table.Column key="name" allowsSorting>
  Title
        </Table.Column>
        <Table.Column key="height" allowsSorting>
 Issue
        </Table.Column>
        <Table.Column key="mass" allowsSorting>
          Property
        </Table.Column>
      </Table.Header>
      <Table.Body items={list.items} loadingState={list.loadingState}>
        {(item) => (
          <Table.Row key={item.name}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
</div>
    </div>
      );
    }