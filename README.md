# funbus 微信小程序页面间数据/事件传递处理解决方案
1. 在utils目录下就是我们自定义的事件处理工具 funbus.js
2. demo 中把funbus 工具类添加到 app.js 中的全局属性中，当然你可以自行引入。
3. 直接调用某个页面的函数
```javascript
let result = app.funbus.callFun('a/a', 'returnBpageData', [1, 2]);
this.setData({
  astring: result,
});
```

4. 间接调用某个不在当前页面堆栈中的页面中的函数
```javascript
// 由于B页面跳转C是重定向 redirectTo 跳过来的，所以B页面不在路由堆栈内，我们要先注册，然后再B页面里适当的时机出发该函数。
app.funbus.subscribe('b-changebgc', { path: 'b/b', method: 'changeBgColor', params: ['white'] });


// 触发在C页面注册的函数
app.funbus.notifyEvent('b-changebgc');
```
5. 具体使用规则可下载demo,在demo中均有体现

