const animation = {
  bg: {
    lineGlow: {
      start: {pos: 200},
      end: (options?: any) => ({
        to: {pos: 0},
        ...options
      })
    },
    lineReveal: {
      start: {size: "0px"},
      end: (options?: any) => ({
        to: {size: "100px"},
        ...options
      })
    },
    plusReveal: {
      start: {scale: 0},
      end: (options?: any) => ({
        to: {scale: 1},
        ...options
      })
    }
  },
  layout: {
    reveal: {
      start: [
        {y: 32},
        {opacity: 0}
      ],
      end: [
        (options?: any) => ({to: {y: 0}, config: {tension: 420, friction: 35}, ...options}),
        (options?: any) => ({to: {opacity: 1}, config: {tension: 250, friction: 40}, ...options})
      ]
    },
    revealSlow: {
      start: [
        {y: 12},
        {opacity: 0}
      ],
      end: [
        (options?: any) => ({to: {y: 0}, config: {tension: 300, friction: 35}, ...options}),
        (options?: any) => ({to: {opacity: 1}, config: {tension: 250, friction: 40}, ...options})
      ]
    },
  }
}

export default animation;