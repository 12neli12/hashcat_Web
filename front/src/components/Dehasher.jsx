import { useState } from "react";

function Dehash() {
  const [hashType, setHashType] = useState("");
  const [attackMode, setAttackMode] = useState("");
  const [inputHash, setInputHash] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputMode, setInputMode] = useState("hash");

  async function crackPassword() {
    setLoading(true);

    if (!hashType || !attackMode) {
      setError("Hash type and attack mode are required");
      setLoading(false);
      return;
    }

    if (inputMode === "hash" && !inputHash) {
      setError("Please enter a hash");
      setLoading(false);
      return;
    }

    if (inputMode === "file" && !file) {
      setError("Please select a file");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("hash_t", hashType);
    formData.append("attack_v", attackMode);

    if (inputMode === "hash" && inputHash) {
      formData.append("input_h", inputHash);
    }

    if (inputMode === "file" && file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("http://localhost:5000/hope_it_works", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError("Something went wrong");
        setResult(null);
      } else {
        setResult(data);
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setInputMode("file");
    }
  };

  const handleHashChange = (e) => {
    setInputHash(e.target.value);
    if (e.target.value) setInputMode("hash");
  };

  const clearFile = () => {
    setFile(null);
    setInputMode("hash");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white" style={{ height: "100vh" }} id="recover">
      <div className="card p-4 w-100" style={{ maxWidth: "450px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
        <h3 className="text-center mb-4 fw-semibold">Crack Da Hash</h3>

        <div className="btn-group w-100 mb-3">
          <button
            className={`btn ${inputMode === "hash" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setInputMode("hash")}
          >
            Single Hash
          </button>
          <button
            className={`btn ${inputMode === "file" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setInputMode("file")}
          >
            File Upload
          </button>
        </div>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Hash Type (0 for MD5 for ex)"
          value={hashType}
          onChange={(e) => setHashType(e.target.value)}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Attack Mode (0 for straight for ex)"
          value={attackMode}
          onChange={(e) => setAttackMode(e.target.value)}
          required
        />

        {inputMode === "hash" && (
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Hash"
            value={inputHash}
            onChange={handleHashChange}
            required
          />
        )}

        {inputMode === "file" && (
          <div className="mb-3">
            <div className="input-group">
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
              />
              {file && (
                <button className="btn btn-outline-danger" type="button" onClick={clearFile}>
                  ×
                </button>
              )}
            </div>
            {file && (
              <div className="form-text text-end small">
                Selected: {file.name} ({Math.round(file.size / 1024)} KB)
              </div>
            )}
          </div>
        )}

        <button className="btn btn-dark w-100" onClick={crackPassword} disabled={loading}>
          {loading ? "Cracking..." : "Crack it!"}
        </button>

        {loading && (
          <div className="text-center mt-3">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="small mt-1">Working on it...</div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger mt-3 text-center small">
            {error}
          </div>
        )}

        {result && (
          <div className="alert alert-success mt-3 text-center small">
            {result.results ? (
              <>
                {result.results.map((pair, index) => {
                  const hash = Object.keys(pair)[0];
                  const psw = Object.keys(pair)[1];
                  const hashh = pair[hash];
                  const psww = pair[psw];
                  return (
                    <div key={index}>
                      <strong>{hashh}</strong> → <span>{psww}</span>
                    </div>
                  );
                })}
                <div className="text-muted mt-2">{result.message}</div>
              </>
            ) : (
              <>
                <div><strong>Hash:</strong> {result.hashed || "N/A"}</div>
                <div><strong>Password:</strong> {result.dehashed || "Not found"}</div>
                <div className="text-muted mt-2">{result.message}</div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dehash;