import React, { memo } from "react";
import Icon from "../TagIcon";
import TagName from "../TagName";
import "./style.css";

const Tag = ({ id, idWorks, isImage, urlImage, alt, discription }) => {
  return (
    <>
      <button id={id} className="tagBtn" onClick={idWorks}>
        {!!isImage && <Icon id={id} img={urlImage} text={alt} />}
        <TagName id={id} name={discription} />
      </button>
    </>
  );
};

export default memo(Tag);