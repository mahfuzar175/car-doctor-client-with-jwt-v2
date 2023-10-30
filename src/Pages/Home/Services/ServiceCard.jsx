import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const {_id, title, img, price} =service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-6 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl w-full h-[208px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-red-500 font-semibold">Price: $ {price}</p>
        <div className="card-actions flex justify-end">
          <div><Link to={`/checkout/${_id}`}><button className="btn btn-circle text-red-500"><AiOutlineArrowRight></AiOutlineArrowRight></button></Link></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
