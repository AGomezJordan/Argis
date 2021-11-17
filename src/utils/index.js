/* eslint-disable */
export function deepAssign(target, ...nObj) {
  if (!nObj.length) return target;
  const source = nObj.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: {},
          });
        }
        deepAssign(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }
  return deepAssign(target, ...nObj);
}

export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
export const retMod = (modulesFiles) => {
  const obj = {};
  modulesFiles.keys().forEach((modulePath) => {
    const name = modulePath.replace(/^\.\/([^\/]*).*$/, '$1');
    if (!obj[name]) {
      obj[name] = {};
    }
    deepAssign(obj[name], modulesFiles(modulePath).default);
  });
  return obj;
};

export const retRoute = (modulesFiles) => modulesFiles.keys().reduce((modules, modulePath) => {
  modules[modulePath.replace(/^\.\/([^\/]*).*$/, '$1')] = modulesFiles(
    modulePath,
  ).default;
  return modules;
}, {});

export const fromObjectToArr = obj => Object.keys(obj).map(key => obj[key][0]);