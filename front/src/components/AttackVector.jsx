import React from "react";

function AttackVectorInfo() {
  const modes = [
    { number: 0, mode: "Straight", explanation: "Dictionary attack using a wordlist directly." },
    { number: 1, mode: "Combination", explanation: "Combines two words from two (or the same) wordlists." },
    { number: 3, mode: "Brute-force", explanation: "Tries every character combo based on a pattern (?l?d etc.)." },
    { number: 6, mode: "Hybrid Wordlist + Mask", explanation: "Appends a mask to each word in a wordlist." },
    { number: 7, mode: "Hybrid Mask + Wordlist", explanation: "Prepends a mask to each word in a wordlist." },
    { number: 9, mode: "Association", explanation: "Used for ASSOCIATION attacks, related to token pairing formats." },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white p-3">
      <div className="card w-100" style={{ maxWidth: "900px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Hashcat Attack Modes</h3>
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle mb-0">
              <thead className="table-primary">
                <tr>
                  <th scope="col" style={{ width: "10%" }}>Number</th>
                  <th scope="col" style={{ width: "30%" }}>Mode</th>
                  <th scope="col" style={{ width: "60%" }}>Explanation</th>
                </tr>
              </thead>
              <tbody>
                {modes.map(({ number, mode, explanation }) => (
                  <tr key={number}>
                    <th scope="row">{number}</th>
                    <td>{mode}</td>
                    <td>{explanation}</td>
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
