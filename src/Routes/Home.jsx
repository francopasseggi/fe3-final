import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';


const Home = () => {
  const { state } = React.useContext(ContextGlobal);
  const { data, loading, error, theme } = state;


  return (
    <main className={theme}>
      <h1>Home</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>Error loading data: {error}</p>}
      {data &&
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */}
          {data.map((d) => (
            <Card key={d.id} name={d.name} username={d.username} id={d.id} />
          ))}
        </div>
      }
    </main>
  )
}

export default Home