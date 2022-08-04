import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import AdminSide from "./AdminSide";
import './Admin.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';

export default function Agents() {
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
    <div className="admin"><AdminSide/>
    <div className="agents">
    <Table
      aria-label="Example static collection table"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <Table.Header>
        <Table.Column key="first_name" allowsSorting>
         First Name
        </Table.Column>
        <Table.Column key="last_name" allowsSorting>
          Last Name
        </Table.Column>
        <Table.Column key="email" >
          Email
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
    <Button variant="contained" endIcon={<DeleteIcon/>}>
Delete
</Button>
<label>_</label>
<Button variant="contained" endIcon={<UpgradeIcon/>}>
Update
</Button>
    </div>
    </div>
  );
}