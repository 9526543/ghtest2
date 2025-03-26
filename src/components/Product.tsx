import React from 'react';

interface props {
  title: string;
  imageUrl: string;
  description: string;
}

const Product: React.FC<props> = ({ title, imageUrl, description }) => {
  const [like, setLike] = React.useState(false);

  const invertLike = () => {
    setLike((like) => !like);
  };

  return (
    <div className="product-block">
      <div className="product-block__header">{title}</div>
      <img src={imageUrl} className="product-block__image" />
      <p className="product-block__description">{description}</p>
      <div className="product-block__icons">
        <svg
          onClick={invertLike}
          className={like ? 'active' : ''}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M24,11.034a2.5,2.5,0,0,0-2.5-2.5H15.189a.25.25,0,0,1-.237-.328,8.684,8.684,0,0,0,.52-4.407c-.588-2.095-1.834-2.7-2.809-2.565A2,2,0,0,0,11,3.284C11,6.03,8.871,9.03,6.966,10.345a.5.5,0,0,0-.216.412V20.873a.5.5,0,0,0,.405.491c.357.069.681.135.987.2a17.309,17.309,0,0,0,4.108.471h6.5c1.957,0,2.25-1.1,2.25-1.75a2.24,2.24,0,0,0-.232-.994,2.248,2.248,0,0,0,1-3A2.252,2.252,0,0,0,23,14.284a2.226,2.226,0,0,0-.273-1.072A2.5,2.5,0,0,0,24,11.034Z" />
          <path d="M5.25,10.784a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v11a1,1,0,0,0,1,1H4.25a1,1,0,0,0,1-1Zm-1.5,9.25a.75.75,0,1,1-.75-.75A.75.75,0,0,1,3.75,20.034Z" />
        </svg>
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z" />
        </svg>
      </div>
    </div>
  );
};

export default Product;
