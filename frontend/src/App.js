import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState(null); // Start with null to avoid 'undefined' errors

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend Data:", data); // Debugging log
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {!backendData ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {backendData.user.name}</p>
          <p><strong>Email:</strong> {backendData.user.email}</p>
          <p><strong>Phone:</strong> {backendData.user.phone}</p>
          <p><strong>Age:</strong> {backendData.user.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
