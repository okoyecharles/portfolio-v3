import { useSpring } from "@react-spring/web";

// Background elements default animations
const animate = {
  lineGlow: () => useSpring({
    from: { pos: 200 },
    to: { pos: 0 },
    delay: 200,
  }),
  lineReveal: () => useSpring({
    from: { size: "0px" },
    to: { size: "100px" },
    delay: 200,
  }),
  plusReveal: () => useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    delay: 200,
  })
}

export default animate; 