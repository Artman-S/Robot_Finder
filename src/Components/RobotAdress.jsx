import { useState } from "react";

// fonction fléchée pour afficher mes cartes robots avec la props address
const RobotAdress = ({ address }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    //appel de la props address.props dans le jsx
    <>
      <button onClick={() => setIsActive(!isActive)}>Address</button>
      {isActive ? (
        <div className="adress">
          {console.log(isActive)}
          <p><span>Street:</span> {address.street}</p>
          <p><span>Suite:</span> {address.suite}</p>
          <p><span>City:</span> {address.city}</p>
          <p><span>Zipcode:</span> {address.zipcode}</p>
        </div>
      ) : null}
    </>
  );
};
export default RobotAdress;
