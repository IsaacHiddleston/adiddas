import React, { useEffect, useRef, useState } from "react";
import vid from "../assets/forCampus/vid.mp4";
import Navi from "../Navar/Navi";
import OverlayCam from "./OverlayCam";

const Campus = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [window, isPlaying]);

  return (
    <div id="some" className="relative mt-10">
      <div className=""></div>

      <OverlayCam fun={setIsPlaying} prop={isPlaying} />
      <video
        onClick={() => setIsPlaying(!isPlaying)}
        src={vid}
        ref={videoRef}
        loop
        muted
      ></video>
    </div>
  );
};

export default Campus;
