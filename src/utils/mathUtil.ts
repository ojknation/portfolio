export const randomScale = [
  2.6,
  Math.random() * (1.5 - 0.5) + 0.5,
  3,
  Math.random() * (1.5 - 0.5) + 0.5,
  2.9,
]

const axisMap = {
  x: {
    upperLimit: 1400,
    lowerLimit: 70,
  },
  y: {
    upperLimit: 450,
    lowerLimit: 60,
  },
  scale: {
    lowerLimit: 0.2,
    upperLimit: 5,
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
