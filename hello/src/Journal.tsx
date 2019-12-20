import React from 'react';
import MaterialTable, { Column } from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

  interface Row {}

  interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
  }

 export default function MaterialTableDemo() {
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

