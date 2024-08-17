import { useRef } from "react";
import moon from "../assets/moon.png";
import land from "../assets/land.png";
import cat from "../assets/skydiving-cat.gif";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const SkyDivingCatScreen = () => {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          style={{ backgroundColor: "black" }}
          offset={1}
          speed={1}
          factor={2}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={3}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.15}
          speed={0.05}
          onClick={() => ref?.current.scrollTo(3)}
        >
          <h2>Scroll to land the cat on ground...</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.8}
          speed={2}
          onClick={() => ref?.current.scrollTo(3)}
        >
          <h2>You landed me safely, thanks mate!</h2>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.3, end: 2.9 }}>
          <img src={cat} height={620} width={500}></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default SkyDivingCatScreen;
