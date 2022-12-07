import PIXI, { Graphics } from 'pixi.js'

type Star = {
  circle: PIXI.Graphics
  x: number
  y: number
  z: number
}

const stars: Star[] = []
const starsLen = 500

export function createPixiApp(app: PIXI.Application) {
  for (let i = 0; i < starsLen; i++) {
    const star = {
      circle: new Graphics(),
      x: 0,
      y: 0,
      z: 0,
    }

    const x = Math.floor(Math.random() * 600)
    const y = Math.floor(Math.random() * 600)

    star.circle.beginFill(0xffffff, 1)
    star.circle.drawCircle(x, y, 1)
    star.circle.endFill()

    star.circle.pivot.x = star.circle.width / 2
    star.circle.pivot.y = star.circle.height / 2

    app.stage.addChild(star.circle)

    stars.push(star)
  }

  // let scale = 1

  // app.ticker.add((delta: number) => {
  //   for (let i = 0; i < starsLen; i++) {
  //     stars[i].circle.x -= 0.2 * delta
  //     stars[i].circle.y += 0.2 * delta
  //     scale += 0.000001 * delta
  //     stars[i].circle.scale.set(scale, scale)
  //   }
  // })
}
