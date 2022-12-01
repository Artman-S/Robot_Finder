import RobotAdress from "./RobotAdress";
import './Card.css';


// fonction fléchée pour afficher mes cartes robots avec des props destructurées
const RobotCard = ({ id, name, username, phone, email, website, address }) => {
  //constante de mon adresse API
  const API = `https://robohash.org/${id}?set=set2`;

  return (
    //appel des props dans le jsx
    <div className="card">
      <img src={API} alt={name} />
      <h2>{name}</h2>
      <h3><span>Username:</span> {username}</h3>
      <div className="details">
        <p><span>Phone:</span> {phone}</p>
        <p><span>Email:</span> {email}</p>
        <p><span>Website:</span> {website}</p>
        <RobotAdress address={address} />
      </div>
    </div>
  );
};

export default RobotCard;

// export function RobotCard ({name,username,phone,email,website}) {

//     return(
//         <div className="card">
//         <h2>{name}</h2>
//         <h3>{username}</h3>
//         <h4>{phone}</h4>
//         <h4>{email}</h4>
//         <h4>{website}</h4>
//         </div>
//     )
// }
