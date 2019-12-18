import React from 'react';
import MaterialTable, { Column } from 'material-table';

interface Row {
    ID: number;
    IDK: number;
    name: string;
    code: string;
    price: number;
    nomPrice: number;
    div: boolean;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'ID акции', field: 'ID' },
      { title: 'ID курса', field: 'IDK' },
      { title: 'Название', field: 'name'},
      { title: 'Биржевой код', field: 'code'},
      { title: 'Цена покупки', field: 'price' },
      { title: 'Номинальная цена', field: 'nomPrice' },
      { title: 'Дивиденды', field: 'div', lookup: { 1: '+', 2: '-' }, },
    ],
    data: [
      { ID: '1', IDK: '1', name: 'Газпром', code: 'GAZP', price: 249.08, nomPrice: 5, div: 1 },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      } }
    />
  );
}
