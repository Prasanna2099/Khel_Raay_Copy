import { ReactNode } from "react";

const HomeModal = ({
  heading,
  content,
  htmlFor,
}: {
  heading: ReactNode;
  content: ReactNode;
  htmlFor: string;
}) => {
  return (
    <>
      <label htmlFor={`modal_${htmlFor}`} className="btn btn-accent">
        Learn More
      </label>

      <input type="checkbox" id={`modal_${htmlFor}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{heading}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label htmlFor={`modal_${htmlFor}`} className="btn btn-error">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeModal;
