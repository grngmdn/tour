import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project"

function App() {

  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  useEffect(() => { 
    setLoading(true)
    const fetchTours = fetch(url)
    .then(res => res.json())
    .then(data => setTours(data))
    setLoading(false)
  },[])

  if(loading) {
    return(
      <h1>
        {loading ? <Loading /> : null}
      </h1>
    )
  }

  return (
      <div>
        <Tours tours={tours} />
        {console.log(tours)}
      </div>
  );
}

export default App;


