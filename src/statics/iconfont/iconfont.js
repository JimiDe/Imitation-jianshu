import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1577924988399'); /* IE9 */
    src: url('./iconfont.eot?t=1577924988399#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXwAAsAAAAACzQAAAWjAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEAgqIIIZ3ATYCJAMkCxQABCAFhG0HgREbrAkjEcLGgRB+PEL2z4RsTmhdC0VQBSF3hbtZuqRIQfDxvt5ofBM8X3P/nrt3k7fJ+8gKUP35EhAUcUkDgDIVstPxLFEmLQu5P7D7fF2d6gyEE1Cb/x+kP8HVBATANluZNkXmpz+z7k0qbX8tgawQBsLZwTHTpW9geasEm1J22Wg8HtCA6jO9QJ4f/0le4AHg2V8lOi+d9IL3NASIqYN2kKGRqSUcFk4naDk9OtjC2ezYELzgTKHPlVblOfI488CcB56p3y+/6UCUwBAo3LPmqoZ36Xvm0p963bNQgM6Azc8LXK8DBdoBLMhLX/9jVM+3gxK/qzE2AQr4xygkSklRYpP4pRrpmPSn9y4xhdPQSypzEbrAoVgq/R+PkAwCEsLpc4C9kHSQiHLToAkrCoMWrFgYbGDFwOAHNgJINayEMIyBlQwML6EcZ30kX1EEUA1ICyBv4Ixdar/BIgh2vB7nCjU7o6qiIqGrq6SkS6ipY7rKRioYfSplpP/6E1IUGZ6nFl6RXjMXnvWIz5nr10lBoBddlVw24Z/2S047dOSUd6/bhghCD4ngDAHBCGeHV1NMCB3OHfI/wVsuaZwh0atayzlXz5bKWJ2KGaxu5Uy2dKZUv3od51Q1S7JmgUPm+QLqOK1C4vVEbt4sM3yBQU7pPkIKxIIfxiUXEY5hOLUyhNq+Bq7LED2GIKrV2CXcZsSHFH+DvN5Xr/td5yn+MSPeoq8Khc6lDt2zZumQMwSBmbozCak+M7tqFilZy62j2JocCZ0YwWlE8kopPp2NJTOwkoqy1Cr1+x0VhF4NZc0edUW1UkIOp8OpkDAmlSxRB7WtVQe5Q9ID7H7aAmV5zNxQ+brSnhdfNmCbsVd/0ANKVBalhN20sFBd/jvk44GXdaLN6UpX7xgvrxh3P3qCDRJdkG+VbTvV0tvbcuqy5TmLdCPmHTq0dWNqyruNG9/JPVwWERuL1cJdjzvWd1pb18Wv6+g4byOzPU9SF6wvZGZJFrD8Im1w8+Pnk+9Yy7A7f3RW1nkbOFwVf8Uh5kql2v+yaKEuLJ2SiyqrDROx32HtHScC3BH5SLdmR7pWtZBIjgh6UsR0nDPU/W1k+9HWDA5vQr/d19mouvEEsc52vbmpzH+Vu0zqsiQ+20p+OTkdubnVbIrR1FHfxwaN91XJJHvSB4z1q+rGTQ95eOMe/vsi7A6MvVL+pK7Mvum5n2tMJS7v9bghy7/lmbXpwQc64xzG2c9xmKM1LT/bKt2yv98ywyprp1W2ZbohsQazrXb60NKts3dad+ZB5DJMFNFlvESWShoUXmwZZt4dAg6zmqDpcm3/+J7xTvtirGImc/9lsv9mokZd+KHZ3PiY8dFzN1cFVQZWBlWZRIullwXw29AzOg7+iPmvg+r9/uthxX/z1zFTdAbgD6FHtJ8VWXSCspv8UXzK/zr6Xz3kqyP+BanP3huXaSJdAw4DsRUbuBUzCUF49UfFOSL7miNKY6tMeQpyxBC4rAFifgk27HARfM/XXLpJaIWMpabWQFV2UXHUE9Ji2yEgSyeEOHohpg1Gr89SDJdAERsBrXCHgVAAr8CQx2tQCuAt0mK/QUAZ/IWQAgSFmBVE+45ZGpFr+eohYK5YQbEDLsWR4NIrrfULTWrzYFWphD8MkVMw7A2cpRd0GPI4J67NSJWAgnTwzJ6HbSvgg9RYas+q+lW/T37v1CulO7g6iA6YK1ZQ7IBLcSSv1ivX13+hSW0eQma+Rf8wRN4chr1BDOSL3sWaWZfdcW1GqnQ6joJ08AwvtnxewPsfqrHUnk2R9as+LaK4+l75xm5arwFADHf/SIyoWAkklIw4iSTGsaJn1/e25fVQvEREHQzH85NPJD39YmP16C4/i5Jiktu9ZZc7eSs6yrecuyoXy7ymYk/bBlF9E62kmgNy+5wPDgA=') format('woff2'),
    url('./iconfont.woff?t=1577924988399') format('woff'),
    url('./iconfont.ttf?t=1577924988399') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1577924988399#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`