function AttackVectorInfo() {
  const modes = [
    { number: 900, hash: "MD4", category: "Raw Hash" },
    { number: 0, hash: "MD5", category: "Raw Hash" },
    { number: 100, hash: "SHA1", category: "Raw Hash" },
    { number: 1300, hash: "SHA2-224", category: "Raw Hash" },
    { number: 1400, hash: "SHA2-256", category: "Raw Hash" },
    { number: 10800, hash: "SHA2-384", category: "Raw Hash" },
    { number: 1700, hash: "SHA2-512", category: "Raw Hash" },
    { number: 17300, hash: "SHA3-224", category: "Raw Hash" },
    { number: 17400, hash: "SHA3-256", category: "Raw Hash" },
    { number: 17500, hash: "SHA3-384", category: "Raw Hash" },
    { number: 17600, hash: "SHA3-512", category: "Raw Hash" },
    { number: 6000, hash: "RIPEMD-160", category: "Raw Hash" },
    { number: 600, hash: "BLAKE2b-512", category: "Raw Hash" },
    { number: 11700, hash: "GOST R 34.11-2012 (Streebog) 256-bit, big-endian", category: "Raw Hash" },
    { number: 11800, hash: "GOST R 34.11-2012 (Streebog) 512-bit, big-endian", category: "Raw Hash" }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white p-3  mb-5">
      <div className="card w-100" style={{ maxWidth: "900px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Supported Hashes</h3>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-primary">
                <tr>
                  <th scope="col" style={{ width: "23%" }}>Number</th>
                  <th scope="col" style={{ width: "38%" }}>Hash</th>
                  <th scope="col" style={{ width: "49%" }}>Category</th>
                </tr>
              </thead>
              <tbody>
                {modes.map(({ number, hash, category }) => (
                  <tr key={number}>
                    <th scope="row">{number}</th>
                    <td>{hash}</td>
                    <td>{category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttackVectorInfo;
