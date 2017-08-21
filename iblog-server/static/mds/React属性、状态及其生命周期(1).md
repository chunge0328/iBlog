# React组件特征
# state
- 只要更新组件中的state，render方法就会被调用，也就是说会重新渲染页面，更新state的操作通过setState方法来实现
- 与props的区别
主要区别在于props是不可变的，而state可以根据与用户交互来改变。
# 生命周期
## 生命周期可以分为三个状态
- Mounting 已经插入真实dom
- Updating  正在被重新渲染
- Unmounting  已经移出真实dom



