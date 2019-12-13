import React from 'react';

const App: React.FC = () => {
  return (
    <body>
      <h1>Акции</h1>

      <table>
        <thead>
          <tr>
            <th scope="col">ID акции</th>
            <th scope="col">ID Курса</th>
            <th scope="col">Название</th>
            <th scope="col">Биржевой код</th>
            <th scope="col">Цена покупки</th>
            <th scope="col">Номинальная цена</th>
            <th scope="col">Дивиденды</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>Газпром</td>
            <td>GAZP</td>
            <td>249.08</td>
            <td>5</td>
            <td>+</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2</td>
            <td>Россети</td>
            <td>RSTI</td>
            <td>1.29</td>
            <td>1</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3</td>
            <td>Мвидео</td>
            <td>MVID</td>
            <td>583,40</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>4</td>
            <td>Татнефть</td>
            <td>TATN</td>
            <td>737.50</td>
            <td>1</td>
            <td>+</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>5</td>
            <td>Яндекс</td>
            <td>YNDX</td>
            <td>2653,40</td>
            <td></td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>6</td>
            <td>Сбербанк</td>
            <td>SBER</td>
            <td>241.55</td>
            <td>3</td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
    </body>
   
  );
}

export default App;
