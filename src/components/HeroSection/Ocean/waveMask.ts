export const waveMaskSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="250"><defs><linearGradient id="a" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-opacity=".4"/><stop offset="1"/></linearGradient></defs><path fill="url(#a)" d="M0 62l48 5.3C96 73 192 83 288 83.3 384 83 480 73 576 56.7 672 41 768 19 864 8.7 960-2 1056-2 1152 8.7c96 10.3 192 32.3 240 42.6l48 10.7v188H0z"/></svg>';

export const waveMaskUrl = `data:image/svg+xml,${encodeURIComponent(
  waveMaskSvg,
)}`;
