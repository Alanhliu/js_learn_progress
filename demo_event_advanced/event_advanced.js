/**
 * Created by hliu on 2016/11/3.
 */

window.onload = function() {
    /*
     document.onclick = function() {
     alert(this);
     };

     //因为box()函数被onclick绑定了,所以里面的this代表document
     document.onclick = box;
     */

    //两个alert(arguments.length)我们发现，通过事件绑定的执行函数是可以得到一个隐藏参数的。
    //说明，浏览器会自动分配一个参数，这个参数其实就是 event 对象。
    //document.onclick = function() {
    //    alert(arguments.length);
    //};

    //document.onclick = function(event) {
    //    var e = event || window.event;//W3C || IE
    //    alert(event);
    //};

    document.onclick = function(e) {
        //alert(e.clientX+','+ e.clientY);
        //alert(document.documentElement.scrollTop);//chrome
        //alert(e.screenX+','+ e.screenY);
    }
}

//如果在全局范围内调用box(),那么this代表window
//box();
//
//function box() {
//    alert(this);
//}

//两个alert(arguments.length)我们发现，通过事件绑定的执行函数是可以得到一个隐藏参数的。
//box(1,2);
//
//function box() {
//    alert(arguments.length);
//}




