import "./static/css/main.less";
import "./static/css/scroll.less";
import "./static/icon/iconfont.css";
import "./static/js/iframeLoading";
import "./static/css/nprogress.css";
import { pageChange, setNavItemClickEvent } from "./static/js/page";
import { setToggleEvent, setNavActive } from "./static/js/nav";
import { setIframeLoadingEvent } from "./static/js/iframeLoading";
import "./static/js/search";
import "./static/js/live2d_cat";
// * 监听 hash 改变。
window.onhashchange = () => {
  // 设置 nav 活跃效果
  initActive();
};
$(document).ready(function () {
  // 设置 nav 活跃效果
  initActive();
  // 点击 a 标签修改 hash
  setNavItemClickEvent();
  // 设置目录的展开收起
  setToggleEvent();
  // 设置 iframe loading 监听
  setIframeLoadingEvent();
});
// * 设置 nav 活跃效果
function initActive() {
  const pathName = pageChange();
  // 设置动态颜色
  if (pathName) {
    setNavActive(pathName.slice(1));
  }
}
