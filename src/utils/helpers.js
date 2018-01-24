/**
 * @desc return ellipsed text
 * @param  {String} [text='']
 * @param  {Number} [maxLength=false]
 * @return {String}
 */
export const ellipseText = (text = '', maxLength = false) =>
  maxLength && text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

/**
 * @desc   Returns String for date in
 * @param  {string} date
 * @param  {boolean} short
 * @param  {number} current
 * @return {string}
 */

export const getTimeagoString = (date, short, current) => {
  const monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const limits = [60000, 3600000, 86400000, 604800000, 1209600000];
  if (!date) return null;
  let _current = current || Date.now();
  if (isNaN(_current)) {
    const _currentObj = new Date(_current);
    _current = _currentObj.getTime();
  }
  const _date = Number(date) ? Number(date) : date;
  const dateObj = new Date(_date);
  const timestamp = dateObj.getTime();
  const month = dateObj.getUTCMonth();
  const day = dateObj.getUTCDate();
  const diff = _current - timestamp;
  let string = short ? `${monthsShort[month]} ${day}` : `${monthsLong[month]} ${day}`;
  if (diff < limits[0]) {
    string = 'just now';
    return string;
  } else if (diff < limits[1]) {
    const timeDiff = Math.ceil(diff / limits[0]);
    string = short ? `${timeDiff} mins ago` : `${timeDiff} minutes ago`;
    return string;
  } else if (diff < limits[2]) {
    const timeDiff = Math.ceil(diff / limits[1]);
    string = timeDiff === 1 ? `${timeDiff} hour ago` : `${timeDiff} hours ago`;
    return string;
  } else if (diff < limits[3]) {
    const timeDiff = Math.ceil(diff / limits[2]);
    string = timeDiff === 1 ? `${timeDiff} day ago` : `${timeDiff} days ago`;
    return string;
  }
  return string;
};

/**
 * @desc Returns reading time from body content
 * @param  {string} content
 * @return {number}
 */

export const getReadingTime = content => {
  if (!content) return null;
  const articleWordLength = content.replace(/\s?[^a-zA-Z\d\s]\s/g, ' ').split(' ').length;
  const wordsPerMinute = 250;
  return Math.ceil(articleWordLength / wordsPerMinute);
};

/**
 * @desc Appends script tag to hide Intercom
 * @return {Void}
 */
export const hideIntercom = () => {
  const css = '#intercom-container { display: none }';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'hideIntercom';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
};

/**
 * @desc Removes script tag to show Intercom
 * @return {Void}
 */
export const showIntercom = () => {
  const style = document.getElementById('hideIntercom');
  if (style) {
    style.parentNode.removeChild(style);
  }
};

/**
 * @desc capitalise string
 * @param {string} string
 * @return {Void}
 */
export const capitalise = string => string.slice(0, 1).toUpperCase() + string.slice(1);

/**
 * @desc returns url parameter value
 * @param  {String} parameter
 * @param  {String} url
 * @return {String}
 */
export const getUrlParameter = (
  parameter,
  url = typeof window !== 'undefined' ? window.location.href : ''
) => {
  let name = parameter.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
