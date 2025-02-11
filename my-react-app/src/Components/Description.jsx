import '../Styles/Gallery.scss';

function Description({ logement }) {
  if (!logement || !logement.description || !logement.location) {
    return <p>No Descriptions available</p>;
  }

  return (
    <div>
        <div className="description">
            <p>{logement.description}</p>
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
