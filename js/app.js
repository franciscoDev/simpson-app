(function (vue, axios) {

    var app = new Vue({
        el: '#app',
        data: {
            errorNetwork: false,
            imageErrorName :"errorConection",
            imageErrorExtension : ".jpg",
            imagePath : "./img/",
            imageError : this.imagePath + this.imageErrorName + 1 + this.imageErrorExtension,
            quotes: []
        },
        methods: {
            load: function (event) {

                var apiUrl = "https://thesimpsonsquoteapi.glitch.me/quotes";
                var _this = this;
                var configAxios = {
                    method: 'get',
                    url: apiUrl,
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                
                axios(configAxios)
                    .then(function (response) {
                        _this.showLoader = false;
                        _this.quotes = response.data;
                    }).catch(function (error) {
                        _this.errorNetwork = true;
                        _this.changeImageError();
                    });

            },//end load method.

            changeImageError : function(){
               var _this = this;
               var index = Math.floor(Math.random() * 4) + 1;
               //_this.imageError =  "./img/errorConection{1,2,3,4}.jpg".
               _this.imageError =  _this.imagePath + _this.imageErrorName +  index  + _this.imageErrorExtension;
            },//end changeImageError method.
        },
        mounted: function () {
            var _this = this;
            _this.load();
        }

    });
})(window.Vue, window.axios);