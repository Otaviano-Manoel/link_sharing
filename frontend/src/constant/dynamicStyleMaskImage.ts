export const styledMaskImage = (url: string) => {
  return {
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskSize: "cover",
    maskSize: "cover",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  } as React.CSSProperties;
};
