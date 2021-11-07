/*
 * USAGE
 *  import * as c from 'lib/common';
 *  ... c.funcName(args) ...
 */

export function exist(v) {
  return v === void 0 ? false : true;
}

export function used(v) {
  return v === void 0 || v === null || v === '' ? false : true;
}

export function typeOf(value, type) {
  const valueType = Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();

  if (!exist(type)) {
    return valueType;
  }
  switch (type) {
    case 'undefined':
    case 'Undefined': {
      return valueType === 'undefined';
    }
    case 'null':
    case 'Null': {
      return valueType === 'null';
    }
    case 'number':
    case 'Number':
    case 'num':
    case 'Num':
    case 'n':
    case 'N': {
      if (isNaN(value)) {
        return false;
      }
      return valueType === 'number';
    }
    case 'string':
    case 'String':
    case 'str':
    case 'Str':
    case 's':
    case 'S': {
      return valueType === 'string';
    }
    case 'boolean':
    case 'Boolean':
    case 'bool':
    case 'Bool':
    case 'b':
    case 'B': {
      return valueType === 'boolean';
    }
    case 'array':
    case 'Array':
    case 'arr':
    case 'Arr':
    case 'a':
    case 'A': {
      return valueType === 'array';
    }
    case 'object':
    case 'Object':
    case 'obj':
    case 'Obj':
    case 'o':
    case 'O': {
      return valueType === 'object';
    }
    case 'function':
    case 'Function':
    case 'func':
    case 'Func':
    case 'f':
    case 'F': {
      return valueType === 'function';
    }
    default: {
      break;
    }
  }
  return false;
}

export function sCopy(v) {
  const vType = typeOf(v);
  return vType === 'array'
    ? v.slice()
    : vType === 'object'
    ? Object.assign({}, v)
    : v;
}

export function dCopy(v) {
  return typeOf(v, 'array') || typeOf(v, 'object')
    ? JSON.parse(JSON.stringify(v))
    : sCopy(v);
}
export { dCopy as clone };

export function toString(v) {
  const vType = typeOf(v);
  let str = '';
  if (vType === 'array' || vType === 'object') {
    str = JSON.stringify(v);
  } else if (vType !== 'undefined' && vType !== 'null') {
    str += v;
  }
  return str;
}
