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
        <div className='tag-container'>
        {logement.tags.map((tag, index) => (
        <p className='tag' key={index}>{tag}</p>
      ))}
    </div>
        
    </div>
  );
}

export default Description;
