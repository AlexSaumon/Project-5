import '../Styles/Tag.scss';

function Tags({ logement }) {
  if (!logement || !logement.tags || logement.tags.length === 0) {
    return <p>No Tags available</p>;
  }

  return (
    <div className='host'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} className="avatar" alt="avatar" />
        </div>
  );
}

export default Tags;
