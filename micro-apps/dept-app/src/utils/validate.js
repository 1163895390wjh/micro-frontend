/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ["admin", "editor"];
  return valid_map.indexOf(str.trim()) >= 0;
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === "string" || str instanceof String) {
    return true;
  }
  return false;
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

/* 手机号 */
export function validateMobile(str) {
  if (str === "") {
    return;
  }
  const reg =
    /^13[0-9]{9}$|^15[0-9]{9}$|^17[0-9]{9}$|^18[0-9]{9}$|^14[0-9]{9}$|^16[0-9]{9}$|^19[0-9]{9}$/;
  return reg.test(str);
}

// 电话
export function validateTelNumber(str) {
  var reg, isMobile;
  var regPos = /^\d+(\.\d+)?$/; // 非负浮点数
  var regNeg =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数
  if (regPos.test(str) || regNeg.test(str)) {
    isMobile = true;
  } else {
    isMobile = false;
  }
  if (isMobile) {
    reg =
      /^13[0-9]{9}$|^15[0-9]{9}$|^17[0-9]{9}$|^18[0-9]{9}$|^14[0-9]{9}$|^16[0-9]{9}$|^19[0-9]{9}$/;
    return reg.test(str);
  } else {
    reg = /^[-0-9]+$/;
    return reg.test(str);
  }
}

// 密码
export function validatePwd(str) {
  if (str === "") {
    return;
  }
  if (str.length < 8) {
    return false;
  }
  const reg = /^(?:(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-za-z0-9])).*$/;
  // const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/
  // const reg = /^[0-9A-Za-z]{8,20}$/
  return reg.test(str);
}

// 验证码
export function validateCode(str) {
  if (str === "" || str.length !== 6) {
    return;
  }
  const reg = /^\d{6}$/;
  return reg.test(str);
}
// emoji
export function validateEmoji(str) {
  if (str === "") {
    return;
  }
  // eslint-disable-next-line no-misleading-character-class
  // const reg = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
  return !reg.test(str);
}

export function validateZWYWSZ(str) {
  if (str === "") {
    return;
  }
  // eslint-disable-next-line no-misleading-character-class
  const reg =
    // eslint-disable-next-line no-misleading-character-class
    /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[A9|AE]\u3030|\uA9|\uAE|\u3030/gi;
  return reg.test(str);
}
