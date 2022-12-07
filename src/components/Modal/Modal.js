import React from 'react';

const Modal = (props) => {
    return (
        <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{props.data.name}</h3>
    <img src={props.data.img} alt="" />
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label onClick={()=>props.setModalData(null)} htmlFor="my-modal" className="btn">X</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;