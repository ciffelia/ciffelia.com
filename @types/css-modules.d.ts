declare module '*.module.scss' {
  interface ICssModule {
    [className: string]: string
  }

  const cssModule: ICssModule
  export = cssModule
}
