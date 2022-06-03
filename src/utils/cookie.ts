/* eslint-disable no-useless-escape */

function escape(string: string) {
  return string.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1');
}

export function getCookie(name: string) {
  const match = document.cookie.match(
    RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'),
  );

  return match ? match[1] : '';
}
