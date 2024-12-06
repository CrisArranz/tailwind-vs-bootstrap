/* eslint-disable react/prop-types */
export default function Card({ className = {}, isBoostrapComponent = false, information = {} }) {
  if (isBoostrapComponent){
    return (
      <div className="card w-25">
        <img src={information.image?.src} className="card-img-top w-50" alt={information.image?.alt} />
        <div className="card-body d-flex flex-column gap-4">
          <h4 className="card-title fs-4">{information.title}</h4>
          <p className="card-text">{information.description}</p>
          <a href="#" className="btn btn-primary">{information.button?.label}</a>
        </div>
      </div>
    );
  }

  return (
    <div className={className.card}>
      <img src={information.image?.src} className={className.image} alt={information.image?.alt} />
      <div className={className.body}>
        <h5 className={className.title}>{information.title}</h5>
        <p className={className.description}>{information.description}</p>
        <a href="#" className={className.button}>{information.button?.label}</a>
      </div>
    </div>
  );
}