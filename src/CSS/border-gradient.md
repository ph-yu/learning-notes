### 圆角边框

> 利用两层mask，第一层mask遮罩的clip范围是content-box，通过mask-composite: exclude(只显示两个遮罩不重叠的部分)实现

```vue
<template>
  <div class="container">掌中舞罢箫声绝，三十六宫秋夜长</div>
</template>

<style lang="scss">
.container {
  position: relative;
  box-sizing: border-box;
  width: max-content;
  height: 60px;
  padding: 0 10px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(to right, #fff, #000);
  background-clip: text;
}
.container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 30px;
  padding: 2px;
  background: linear-gradient(to right, #fff, #000);
  mask: linear-gradient(#fff 0 100%) content-box, linear-gradient(#fff 0 100%);
  mask-composite: exclude;
}
</style>
```