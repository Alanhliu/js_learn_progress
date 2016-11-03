/**
 * Created by hliu on 2016/11/3.
 */


/*
 内联模型(基本不用了)
 <input type="button" value="按钮" onclick="alert('lee');"/>
 <input type="button" value="按钮" onclick="box();"/>

 function box() {
 alert('lee');
 }
 */

window.onload = function () {
    var input = document.getElementsByTagName('input')[0];

    /*
     input.onclick = function() {
     alert('lee');
     }

     //赋值不能加括号,括号就执行了

     //1.鼠标事件
     input.onclick = box;
     function box() {
     alert('lee');
     }

     //dblclick:当用户双击主鼠标按钮时触发。
     input.ondblclick = function () {
     alert('Lee');
     };
     //mousedown:当用户按下了鼠标还未弹起时触发。
     input.onmousedown = function () {
     alert('Lee');
     };
     //mouseup:当用户释放鼠标按钮时触发。
     input.onmouseup = function () {
     alert('Lee');
     };
     //mouseover:当鼠标移到某个元素上方时触发。
     input.onmouseover = function () {
     alert('Lee');
     };
     //mouseout:当鼠标移出某个元素上方时触发。
     input.onmouseout = function () {
     alert('Lee');
     };
     //mousemove:当鼠标指针在元素上移动时触发。
     input.onmousemove = function () {
     alert('Lee');
     };

     //2.键盘事件
     //keydown:当用户按下键盘上任意键触发，如果按住不放，会重复触发。
     onkeydown = function () {
     alert('Lee');
     };
     //keypress:当用户按下键盘上的字符键触发，如果按住不放，会重复触发。
     onkeypress = function () {
     alert('Lee');
     };
     //keyup:当用户释放键盘上的键触发。
     onkeyup = function () {
     alert('Lee');
     };


     //3.HTML 事件
     //load:当页面完全加载后在window上面触发，或当框架集加载完毕后在框架集上触发。
     window.onload = function () {
     alert('Lee');
     };

     //select:当用户选择文本框(input或textarea)中的一个或多个字符触发。
     input.onselect = function () {
     alert('Lee');
     };
     //change:当文本框(input或textarea)内容改变且失去焦点后触发。
     input.onchange = function () {
     alert('Lee');
     };
     //focus:当页面或者元素获得焦点时在window及相关元素上面触发。
     input.onfocus = function () {
     alert('Lee');
     };
     //blur:当页面或元素失去焦点时在window及相关元素上触发。
     input.onblur = function () {
     alert('Lee');
     };
     */

}

//function box() {
//    alert('lee');
//}