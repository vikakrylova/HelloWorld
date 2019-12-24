import React from 'react';
import MaterialTable, { Column } from 'material-table';
  interface Row {}

  interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
  }

 export default function Journal() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Журнал ID', field: 'ID' },
      { title: 'ID акции', field: 'IDA' },
      { title: 'Операция', field: 'action', lookup: { 1: 'Покупка', 2: 'Продажа' },},
      { title: 'Дата', field: 'date', Date},
      { title: 'Количество', field: 'count' },
      { title: 'Прибыль', field: 'profit' },
    ],
    data: [{ ID: '1', IDA: '2', action: 1, date: 12.12, count: 15, profit:-19.2 },
           {ID: '2', IDA: '6', action: 2, date: 11.09, count: 8, profit:1932.4},
           {ID: '3', IDA: '5', action: 2, date: 7.02, count: 3, profit:7960.2},
           {ID: '4', IDA: '3', action: 1, date: 12.12, count: 9, profit:-5250.6}
           ],
    
  });

  return (
    <MaterialTable
      title="Журнал"
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
