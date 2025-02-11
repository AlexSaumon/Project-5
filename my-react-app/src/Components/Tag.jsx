import '../Styles/Gallery.scss';

function Tags({ logement }) {
  if (!logement || !logement.tags ) {
    return <p>No Tags available</p>;
  }

  return (
    <div>
        <p>{logement.tags}</p>
    </div>
  );
}

export default Tags;
