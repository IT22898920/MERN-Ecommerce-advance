import React from 'react'
import Slider from '../../components/slider/Slider';
import "./Home.scss"
import HomeInfoBox from './HomeInfoBox';

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn"> {btnText}</button>
      </div>
      <div className="--hr" />
    </>
  );
};
const Home = () => {
  return (
    <div>
      <>
        <Slider />
        <section>
          <div className="container">
            <HomeInfoBox />
            <PageHeading heading={"Latest Products"} btnText={"Shop Now >>>"} />
            
          </div>
        </section>
      </>
    </div>
  );
}

export default Home