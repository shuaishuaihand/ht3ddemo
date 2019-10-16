window.htconfig = {
    //全局统一配置
    Default: {
        convertURL: function(url) {
            var storagePrefix="/";
            if (storagePrefix && url && !/^data:image/.test(url) && !/^http/.test(url) && !/^https/.test(url)) {
                url = storagePrefix + '' + url
            }
            return url;
        }
    }
};