import { useState, useEffect } from "react";

function CrackedHistory() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  async function getHistory() {
    try {
      const response = await fetch("http://localhost:5000/show_db");
      const data = await response.json();
      console.log(data)
      setHistory(data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch history.");
    }
  }

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white p-3 mb-5" id="db_table">
      <div className="card w-100" style={{ maxWidth: "900px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Recovered Passwords</h3>

          {error && <p className="text-danger text-center">{error}</p>}

          {!error && history.length === 0 && (
            <ul className="list-group mb-3">
              <li className="list-group-item text-center">No data found</li>
            </ul>
          )}

          {history.length > 0 && (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-primary">
                  <tr>
                    <th scope="col" style={{ width: "50%" }}>Hash</th>
                    <th scope="col" style={{ width: "50%" }}>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, index) => (
                    <tr key={index}>
                      <td>{item.hash}</td>
                      <td>{item.dehashed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
    )
}

export default CrackedHistory;
