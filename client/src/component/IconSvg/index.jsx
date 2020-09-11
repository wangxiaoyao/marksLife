import React from "react";

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);

try {
  importAll(require.context("@/source/svg", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

const IconSvg = (props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export default IconSvg;
