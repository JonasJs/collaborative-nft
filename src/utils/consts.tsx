
/**
 * Generation 100 pixels
 */
export const PIXELS_DEFAULT = (() => {
  return [...new Array(10*10)].map((element: any, index: number) => ({
    id: String(index+1),
    position: index+1,
    color: "#fff"
  }));
})()
