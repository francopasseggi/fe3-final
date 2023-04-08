import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);

  // Find the dentist with the specified id
  const dentist = state.data.find((d) => d.id === Number(id));

  return (
    <div>
      {dentist ? (
        <div>
          <h1>{dentist.name}</h1>
          <table>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>{`${dentist.address.street}, ${dentist.address.suite}, ${dentist.address.city}`}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td><a href={`https://www.${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading dentist data</p>
      )}
    </div>
  );
};

export default Detail;
