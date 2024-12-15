import React from "react";
import { IKImage } from "imagekitio-react";
const Image = ({path,className,w,h,alt}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={path}
      className={className}
      loading="Lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height ={h}
      transformation ={[
        {
        width:w,
        height:h,
        }
      ]}
    />
  );
};

export default Image;