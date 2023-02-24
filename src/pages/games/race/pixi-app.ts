import PIXI, { Container, Graphics, Sprite, Text, TextStyle } from 'pixi.js'
import { assets } from './assets'

const lineHeight = 40
const spaceHeight = 25
let sumDelta = 0

const style: PIXI.TextStyle = new TextStyle({
  fontSize: 36,
  fontWeight: 'bold',
  fill: ['#ffffff'],
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 4,
})

const textOver: PIXI.Text = new Text('Game over', style)
textOver.anchor.set(0.5)

function arrayRandElement(arr: number[]): number {
  const rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

const lineDividing: PIXI.Container = new Container()
const carOne = Sprite.from(assets.carOne)

carOne.width = window.innerWidth < 450 ? 90 : 97
carOne.height = window.innerWidth < 450 ? 163 : 175
carOne.anchor.set(0.5)

export function createPixiApp(app: PIXI.Application) {
  carOne.x = app.view.width / 4
  carOne.y = app.view.height - 120
  app.stage.addChild(lineDividing)
  app.stage.addChild(carOne)
  sumDelta = app.view.height - 20
  lineDividing.x = app.screen.width / 2
  while (sumDelta >= 0) createLineDividing(lineDividing)
}

function createLineDividing(container: PIXI.Container) {
  const line: PIXI.Graphics = new Graphics()
  line.lineStyle(10, 0xffffff, 1)
  line.moveTo(0, sumDelta)
  sumDelta -= lineHeight + spaceHeight
  line.lineTo(0, sumDelta + spaceHeight)
  line.endFill()
  container.addChild(line)
}

function createCar(app: PIXI.Application) {
  const track: number[] = [app.view.width / 4, (3 * app.view.width) / 4]
  const car = Sprite.from(assets.carTwo)
  car.width = window.innerWidth < 450 ? 81 : 90
  car.height = window.innerWidth < 450 ? 153 : 170
  car.anchor.set(0.5)
  car.x = track[arrayRandElement([0, 1])]
  car.y -= car.height
  app.stage.addChild(car)
  return car
}

export function startGame(app: PIXI.Application, onStopGame: () => void) {
  let carNew = createCar(app)
  app.ticker.add((delta: number) => {
    createLineDividing(lineDividing)
    lineDividing.y += 14 * delta
    carNew.y += 16 * delta
    if (carOne.y < carNew.y + carNew.height && carOne.y > carNew.y - carNew.height && carOne.x === carNew.x) {
      app.ticker.stop()
      document.removeEventListener('keydown', () => {})
      onStopGame()
      textOver.x = app.view.width / 2
      textOver.y = app.view.height / 8
      app.stage.addChild(textOver)
    }
    if (carNew.y > app.view.height + carNew.height) {
      carNew.destroy()
      carNew = createCar(app)
    }
  })
}

export function stopGame(app: PIXI.Application) {
  app.ticker.stop()
}

export function continueGame(app: PIXI.Application) {
  app.ticker.start()
}

export function leftCarMove(app: PIXI.Application) {
  carOne.x = app.view.width / 4
}

export function rightCarMove(app: PIXI.Application) {
  carOne.x = (3 * app.view.width) / 4
}
