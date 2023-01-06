const oceanWidth = '100%'
const oceanHeight = '100px'
const waveAspectRatio = 1440 / 250
const displayedWaveWidth = `calc(${oceanHeight} * ${waveAspectRatio})`
const waveEasingFunc = 'cubic-bezier(0.37, 0, 0.63, 1)'

export {
  oceanWidth,
  oceanHeight,
  waveAspectRatio,
  displayedWaveWidth,
  waveEasingFunc,
}
