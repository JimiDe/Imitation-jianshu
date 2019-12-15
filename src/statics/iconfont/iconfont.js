import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1576383762130'); /* IE9 */
    src: url('iconfont.eot?t=1576383762130#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWkAAsAAAAAClQAAAVWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqHAIYDATYCJAMcCxAABCAFhG0HgQEb/AjILrBt5DNbRKaFKXT9Bb9Nm+biX3cUPE/7+/+1Z/bgznl0ev5gExkBJMfffgrfCWJI8Blim92icB3IKotYfCEeigE+4kdHEjx/tXn7/tYNFpYlGMlNibaJr6UBJbSB3V79D5jqESZyqQYGzU/y/zlmunw+sPyrdIksi0ocDffGAxpQ9UVjpB7ondiB0rGfgng2E/4JuhkCkhYxzFZlNTiwpTSNoOTIqWhgG7PSEpyIBp9ztBTLaZxYnTRnAE65Py9fSRHBcIl2q+mHUiUoeNg+bywG5Fmc5znQnxvgToEFPQEU0uR6D2D9eE8WkvI71WyAEpHhH4Nn82dpzzp+dX4+7D/indqwKNH/wQNPWIZykB7QFtHY+QmPL7amNNSFwIxAlwYzFrqOYMHgq7MZhW4Y6nAAgn2kBLQA/EZOaPqBLr0KlJ0apyFkVtVajVhQnZWUanWhoUjJZxdk96gTnVIL0331ZrNrXY/ZZmmejEFxsB1ZR1A5ZP7A/elHr8oXqJgOnWhCUaagiC40p6XUWpIi+DLrkRzm4ClOaa79bGSTbEHbtEDkQl0LvVs2GlKky6NRd2TgPGog9bDBxJYV4MBko6+JWfGTjnxym3r6kHh8A3/U69EVqK4Gux9TT2+RD6517EFHdJ82zR2fYvBN9ZgqG11LTZ8/DR+1auDq0SsHrGgZRTZGDFRdh3s0cbWdZQDegRkPtjgqzvsTeHKtZ5ld+Q6nULJCZtLcfCInj6rFuzhRsl62b+D+0XsH7CGTgitDTsBeySVJSSXxaeSYELNRHdqx5tCJ8uRk+cRFi1vmeRTM2r9/07ramnfr1r0zD9uC0lLLDaDgf7m52PF6oRly9JAZXN51kn59WxFusdlTHod92qs+UzJmDjms6+bG9ULuoLg1A1P75MwEl9lxFyNKLsKSXFF8TTO0njAfqeDyrlv+HrpZOpoRb+ZGxAmRJOewRDapIOtJp3nSaR+P3w1tH9tawIH1Ft/eVq1zWHcjW922JihgZfqy+JWjYxaUN2NWF2dPNrt5DZzgO3HI93PWyFT7GXiP+j5+XqxmxOSchzfuIb/vsMPSi8wnzcpw/nlabAlEXP+PupnphmfBAfseVI2IGBE+I2KG66T2Zqxe3ru3vAFr2oY1y+sDEeVvxrblUOuDm7cFV7aBwtby+t1ikS6yxZbKwm25SMOLg4zbABfgsry8Z2SPkVG7S7CS8QP///J/psrJ+BLNA0eWjCyeuYHNgpkwi/UvBv0AIN+cJ7MSgPyy5tkDkP/PywnybyoB9jzk+/NgFgKQD8gxZTp5NHe6uW5bcGenwd9ipgC88Lvm6krbofKk35qO2rKP0lyGliAoVYVmC0VWky9zA7P8l5bWJAWj2UYNSPoAfIrBCvf601fXxoHoq0MwgmawolakYnuCkxkIXjQMkh7KT2cqiSxIKQDdhhIQZdaDUeISWGXOIhV7F5wab8ErCwvJ3Ki8YKY9NiCjREhLUIkqeqIcI/Cs4ZAQr7QJqkw6WowqXDwJRSMXQhPjEpKpcshDsY8dxm6qJEliUVYU9GgZuR3U6QTUIAoayEhxakkyZMXHs3kvFMcIeoAYRQTRJJASSqEnFIch4LH2aAmS+v4mkIqJDk0s6akIkyCRETc5KlGchBrIci1fq+dcZht1o5JEImHpVSyRQA9VBjek0+MClCF/kQbEkMRRt4gaZImn+rF1tXHj6/XXeQxItP0hjFhRceIlSCTb/QcboZSQmJxus8tE80Y1Zz6Ctt4smIwmAeul5niat6dCnqV7cDSvpAU1cauUXKalO0S2/Wa1YNJwBbFeNAcAAA==') format('woff2'),
    url('iconfont.woff?t=1576383762130') format('woff'),
    url('iconfont.ttf?t=1576383762130') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1576383762130#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } 

`