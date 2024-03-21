const Accordians = ({ heading, body }) => {
  return (
    <div className="collapse collapse-plus bg-white m-5">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title text-xl font-medium">{heading}</div>
      <div className="collapse-content text-slate-600">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Accordians;
