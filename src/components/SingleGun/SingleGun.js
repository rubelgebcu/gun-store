import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    //console.log(props)

    const [modalData ,setModalData]= useState({})
    //console.log(modalData)

    const {gun,countIncrease}=props
    const {action, bullet, name, img , category,price}=gun

    //console.log(gun)
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure><img className='w-96 h-44' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <div className="badge badge-outline">{action} </div> 
      <div className="badge badge-outline">{bullet}</div>

      <div className='mt-4'>
    <button onClick={()=>countIncrease()} className="btn btn-sm btn-secondary mr-2">Add To Cart</button>
    <label onClick={()=>setModalData(gun)} htmlFor="my-modal" className="btn btn-success">View Details</label>
   {modalData &&  (<Modal data={modalData} setModalData={setModalData}></Modal>)}
    </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default SingleGun;