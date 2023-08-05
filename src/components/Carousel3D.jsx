import { Carousel } from "react-carousel3";
import { Link } from "react-router-dom";
import stars from "../assets/images/background-stars.svg"
import {data} from "../assets/data.js"
const style = {
  width: 150,
  height: 150,
};

const Carousel3D = () => {
    // console.log(data)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        backgroundColor: "#000",
        // background: "linear-gradient(to bottom, #16235e 0%, #020223 100%)",
        backgroundImage: `url(${stars})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "900px"

      }}
    >
      <Carousel
        // farScale={10}
        // xOrigin={0}
        // xRadius={50}
        height={800}
        width={2000}
        // yOrigin={0}
        // yRadius={50}
        autoPlay={true}
      >
        {data.map(planet => (
        <div key={planet.id} style={style}>
          <Link to={`/planets/${planet.name.toLocaleLowerCase()}`}>
            <img alt="" src={planet.overview.image} />
          </Link>
        </div>
        ))}
        {/* <div key={2} style={style}>
          <Link to="/planets/mars">
            <img alt="" src={earth} />
          </Link>
        </div>
        <div key={3} style={style}>
          <Link to="/planets/jupiter">
            <img alt="" src={earth} />
          </Link>
        </div>
        <div key={4} style={style}>
          <Link to="/planets/uranus">
            <img alt="" src={earth} />
          </Link>
        </div>
        <div key={5} style={style}>
          <Link to="/planets/neptune">
            <img alt="" src={earth} />
          </Link>
        </div>
        <div key={6} style={style}>
          <Link to="/planets/earth">
            <img alt="" src={earth} />
          </Link>
        </div>
        <div key={7} style={style}>
          <Link to="/planets/earth">
            <img alt="" src={earth} />
          </Link>
        </div>
        <div key={8} style={style}>
          <Link to="/planets/earth">
            <img alt="" src={earth} />
          </Link>
        </div> */}
      </Carousel>
    </div>
  );
};

export default Carousel3D;
