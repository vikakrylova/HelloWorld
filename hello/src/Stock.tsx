import React from 'react';
import MaterialTable, { Column } from 'material-table';



  interface Row {}

  interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
  }

 export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID акции', field: 'ID' },
      { title: 'ID курса', field: 'IDK' },
      { title: 'Название', field: 'name'},
      { title: 'Биржевой код', field: 'code'},
      { title: 'Цена покупки', field: 'price' },
      { title: 'Номинальная цена', field: 'nomPrice' },
      { title: 'Дивиденды', field: 'div', lookup: { 1: '+', 2: '-' }, },
    ],
    data: [{ ID: '1', IDK: '1', name: 'Газпром', code: 'GAZP', price: 249.08, nomPrice: 5, div: 1 },
           { ID: '2', IDK: '2', name: 'Россети', code: 'RSTI', price: 1.28, nomPrice: 1, div: 2 },
           { ID: '3', IDK: '3', name: 'Мвидео', code: 'MVID', price: 583.40, nomPrice: 10, div: 2 },
           { ID: '4', IDK: '4', name: 'Татнефть', code: 'TATN', price: 737.50, nomPrice: 1, div: 1 },
           { ID: '5', IDK: '5', name: 'Яндекс', code: 'YNDX', price: 2653.40, nomPrice: 0, div: 2 },
           { ID: '6', IDK: '6', name: 'Сбербанк', code: 'SBER', price: 241.55, nomPrice: 3, div: 1 }, 
         ],
    
  });

  return (
    <MaterialTable
      title="Мои акции"
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

