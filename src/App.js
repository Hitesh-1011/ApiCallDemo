import "./styles.css";
import React, { useState, useEffect } from "react";

export default function MyComponent() {
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [arrELement, setArrElement] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(true);
          setArrElement(result);
        },
        (log) => {
          setLoading(true);
          setLog(log);
        }
      );
  }, []);

  if (log) {
    return <div>Error: {log.message}</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="mainContainer">
        <div className="table-responsive" style={{ width: "100%" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Tagline</th>
                <th scope="col">First_Brewed</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Abv</th>
                <th scope="col">Ibu</th>
                <th scope="col">Target_fg</th>
                <th scope="col">Target_og</th>
                <th scope="col">Ebc</th>
                <th scope="col">Srm</th>
                <th scope="col">Ph</th>
                <th scope="col">Attenuation_level</th>
                <th scope="col">Volume (value_unit)</th>
                <th scope="col">Boilvolume (value_unit)</th>
                <th scope="col">Method (mash_temp)</th>
                <th scope="col">Method (fermentation)</th>
                <th scope="col">Method (twist)</th>
                <th scope="col">Ingredients (Malt)</th>
                <th scope="col">Ingredients (Yeast)</th>
                <th scope="col">Food Pairing</th>
                <th scope="col">Brewers_tips</th>
                <th scope="col">Contributed_By</th>
              </tr>
            </thead>
            <tbody>
              {console.log(arrELement)}
              {arrELement.map((item) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.tagline}</td>
                  <td>{item.first_brewed}</td>
                  <td className="descStyle">{item.description}</td>
                  <td>
                    <img
                      src={item.image_url}
                      width="100px"
                      // height="100px"
                      alt="placeholderImage"
                    />
                  </td>
                  <td>{item.abv}</td>
                  <td>{item.ibu}</td>
                  <td>{item.target_fg}</td>
                  <td>{item.target_og}</td>
                  <td>{item.ebc}</td>
                  <td>{item.srm}</td>
                  <td>{item.ph}</td>
                  <td>{item.attenuation_level}</td>
                  <td>
                    <li>{item.volume.value}</li>
                    <li>{item.volume.unit}</li>
                  </td>
                  <td>
                    <li>{item.boil_volume.value}</li>
                    <li>{item.boil_volume.unit}</li>
                  </td>
                  <td>
                    {item.method.mash_temp.map((data) => (
                      <>
                        <p>
                          <li>{data.temp.value}</li>
                          <li>{data.temp.unit}</li>
                        </p>
                        <p>{data.duration}</p>
                        <hr />
                      </>
                    ))}
                  </td>
                  <td>
                    {item.method.fermentation.temp.value}
                    <br />
                    {item.method.fermentation.temp.unit}
                  </td>
                  <td>{item.method.twist ? item.method.twist : <>---</>}</td>
                  <td>
                    {item.ingredients.malt.map((data) => (
                      <>
                        <p>{data.name}</p>
                        <p>{data.amount.value}</p>
                        <p>{data.amount.unit}</p>
                        <hr />
                      </>
                    ))}
                  </td>
                  <td>{item.ingredients.yeast}</td>
                  <td>
                    {item.food_pairing.map((data) => (
                      <>
                        <p>{data}</p>
                        <hr />
                      </>
                    ))}
                  </td>
                  <td>{item.brewers_tips}</td>
                  <td>{item.contributed_by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
