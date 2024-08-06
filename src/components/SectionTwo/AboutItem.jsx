const AboutItem = ({ item }) => {
  const { title, description } = item;
  return (
   <>
    <div className="card bg-base-600 items-center justify-center hover:bg-stone-400 w-72 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
       
      </div>
    </div>
   </>
  );
};

export default AboutItem;
