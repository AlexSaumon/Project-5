import '../Styles/Tag.scss';

function Tags({ logement }) {
  if (!logement || !logement.tags || logement.tags.length === 0) {
    return <p>No Tags available</p>;
  }

  return (
    <div className='tag-container'>
      {logement.tags.map((tag, index) => (
        <p className='tag' key={index}>{tag}</p>
      ))}
    </div>
  );
}

export default Tags;
