// 事件缓存
const events = {};

/**
 * 注册事件
 * 
 * key 值命名规则 页面名称-描述 （如： index-refresh）
 * event 是一个对象： {path: '被注册事件发生的页面路径', method: '被注册的方法名称', params: [...被注册的方法需要的参数]}
 * 
 * 调用范例： subscribe("index-refresh", {path:"pages/index", method:"refreshPage", params: [1,2,3]});
 */
function subscribe(key, event) {

  events[key] = event;
}

/**
 * 解除绑定
 */
function unSubscribe(key) {

  delete events[key];
}

/**
 * 唤醒/执行之前订阅的事件
 */
function notifyEvent(key, remove) {

  let event = events[key];

  if (event) {

    // 只有remove的值是布尔类型的false时才不会移除当前事件,其他任何值该事件都会被移除
    if (!remove && remove !== false) {

      remove = true;
    }

    remove && delete events[key];
    return callFun(event.path, event.method, event.params)
  }

  return null;
}

/**
 * 清除所有注册事件
 */
function clearEvents() {

  let keys = Object.keys(events);

  keys.forEach(key => {
    delete events[key];
  });
}


/**
 * 同步执行，会立即执行并拿到被执行函数的返回结果
 * 
 * @pagePath 页面名称或路径
 * @method 执行的方法名
 * @params 方法参数
 */
function callFun(pagePath, method, params) {

  let pages = getCurrentPages();

  let page = null;
  for (let i = 0; i < pages.length; i++) {

    if (pages[i].route.indexOf(pagePath) > -1) {

      page = pages[i];
      break;
    }
  }

  if (page) {
    try {
      return page[method](...params);
    } catch (err) {
      console.error('FunBus Error: ', err);
      return null;
    }
    
  }

  return null;
}

module.exports = {
  callFun: callFun,
  subscribe: subscribe,
  unSubscribe: unSubscribe,
  notifyEvent: notifyEvent,
  clearEvents: clearEvents,
}