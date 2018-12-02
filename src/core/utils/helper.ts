// 获取字符串中连续的数字串
export const getNumber = function getNumber(str: String) {
  if (typeof str === 'string') {
    const arr = str.match(/[-|0-9][0-9]*/)
    return arr && arr[0] ? parseInt(arr[0], 10) : 0
  } else {
    return str
  }
}
