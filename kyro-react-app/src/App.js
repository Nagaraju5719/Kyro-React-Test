import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  let limit = Math.round(Math.random() * 10);

  useEffect(() => {
    fetch(`https://catfact.ninja/facts?limit=${limit}`)
      .then((responce) => responce.json())
      .then((json) => {
        setData(json.data);
        setloading(false);
      });
  }, [limit]);
  return (
    <div className="App-header">
      <h1 className="factHeader">Fact Details</h1>
      {loading ? (
        <h1 className="loading">Loading ... </h1>
      ) : (
        <table>
          <tr>
            <th className="tHead">Id</th>
            <th className="tHead">Fact</th>
            <th className="tHead">Fact Length</th>
          </tr>
          {data &&
            data.map((factData, index) => {
              return (
                <tr key={index}>
                  <td className="idRow">{index + 1}</td>
                  <td className="factRow">{factData.fact}</td>
                  <td className="factLength">{factData.length}</td>
                </tr>
              );
            })}
        </table>
      )}
    </div>
  );
}

export default App;
