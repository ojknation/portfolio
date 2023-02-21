export const randomScale = [
  0.5,
  Math.random() * (1.5 - 0.5) + 0.5,
  2,
  Math.random() * (1.5 - 0.5) + 0.5,
  0.4,
]

// eslint-disable-next-line unused-imports/no-unused-vars
const axisMap = {
  x: {
    upperLimit: 1000,
    lowerLimit: 70,
  },
  y: {
    upperLimit: 450,
    lowerLimit: 60,
  },
  scale: {
    lowerLimit: 0.2,
    upperLimit: 1.2,
  },
}

export function motionGenerator(
  factor = 0,
  axis: "x" | "y" | "scale",
  length = 4
): number[] {
  const randomArray = []
  const lowerLimit = axisMap[axis].lowerLimit
  const upperLimit = axisMap[axis].upperLimit

  for (let i = 0; i < length; i++) {
    let randomValue = Math.random() * (upperLimit - lowerLimit) + lowerLimit

    if (factor > 0) {
      const diff = Math.abs(randomValue - 1)
      const offset = diff * factor
      const sign = Math.random() > 0.5 ? 1 : -1
      randomValue += sign * offset
      randomValue = Math.max(Math.min(randomValue, upperLimit), lowerLimit)
    }

    randomArray.push(randomValue)
  }

  return randomArray
}

export function genScale() {
  return motionGenerator(12, "scale")
}
