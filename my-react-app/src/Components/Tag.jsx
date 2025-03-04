import '../Styles/Tag.scss';

function Tags({ logement }) {
  if (!logement || !logement.host || !logement.host.name) {
    return <p>No Host Available</p>;
  }

  const nameParts = logement.host.name.split(" "); 

  return (
    <div className='host'>
      <p className="host-name">
        {nameParts.map((part, index) => (
          <span key={index}>{part}<br /></span> 
        ))}
      </p>
      <img src={logement.host.picture} className="avatar" alt="avatar" />
    </div>
  );
}

export default Tags;
