/*
 * @fileName: js的基础功能
 * @Date: 2020-12-30 15:55:18
 * @Author: manyao.zhu
 */

// 对象的深度合并
export const deepMergeObj = (...objArr) => {
  let rets = {}; // 初始化的空对象
  function handler(key, source, ret) {
    const isObj = Object.prototype.toString.call(source[key]) === '[object Object]';
    if (isObj) {
      if (!ret[key]) {
        ret[key] = {};  // 键名不存在，拷贝键名
      }
      // 由于是对象需要用递归实现深度的copy
      Object.keys(source[key]).forEach(_key => {
        handler(_key, source[key], ret[key]);
      });
    } else {
      // 是非引用类型、直接拷贝键名所对应的值
      ret[key] = source[key];
    }
  }

  objArr.forEach(item => {
    Object.keys(item).forEach(key => {
      handler(key, item, rets);
    });
  });
  return rets;
};