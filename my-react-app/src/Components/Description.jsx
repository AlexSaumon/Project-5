import '../Styles/Description.scss';

  // vérifications si il y a des descriptions

function Description({ logement }) {
  if (!logement || !logement.title || !logement.location) {
    return <p>No Descriptions available</p>;
  }

  return (
    <div className='container'>
        <div className="description">
            <h3>{logement.title}</h3>
            <p>{logement.location}</p>
        </div>
        <div className='host'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} className="avatar" alt="avatar" />
        </div>
    </div>
  );
}

export default Description;
