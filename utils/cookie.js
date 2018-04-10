var coo = (function(){
    var _default = {
        expires : undefined, // use expires attribute, max-age is not supported by IE
        path : undefined,
        domain : undefined, 
        secure : undefined
    }
    /**
     * @description 自定义浅拷贝函数，覆盖相同属性
     * @param {Object} 目标对象
     * @param {Object} 被拷贝对象
     * @returns {Object} 目标对象
     */
    var _extend = function (obj_1, obj_2) {     
        if(obj_1 && obj_2)
        _each(obj_2).forEach(function (key, i) {
            obj_1[key] = obj_2[key];
        })
        return obj_1;
    }

    var _each = Object.keys || function (obj) {
        var keys = new Array();
        typeof obj === "object" && (function () {
            for (key in obj) {
                obj.hasOwnProperty(key) && keys.push(key);
            }
        })()
        return obj ? keys : obj;
    }

    var _json = function (data) {
        var res = null;
        typeof data != "string" && (function(){
            res = JSON.stringify(data);
        })()
        return res ? res : data;
    }

    return {
        cookie : function (name, value, opt) {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g); 
            var isChange = false;
            
            //读
            if(arguments.length == 1) {
                
            }
            //删除
            if(arguments.length == 2 && value == null) {
                document.cookie = name+'=null;expires=' + new Date(0).toUTCString(); 
                return ;
            }
            var str = name + '=' + value;
            _extend(_default, opt);
            _each(opt).forEach(function (key, i) {
                var optStr = null;  
                typeof opt[key] != undefined && (function () {
                    optStr = ';' + key +'=' + opt[key];
                    str += optStr;
                })()
            })
            document.cookie = str;
        },
        clear : function () {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g); 
            keys.forEach(function (key, i) {
                document.cookie = keys[i]+'=null;expires=' + new Date(0).toUTCString() 
            })
        },
        config : function (opt) {
            opt && _extend(_default, opt);
        }
    }
})()