Vue.component('iphones',{
    props: ["phones"],
    template: `<div>
    <div class="main-2__top">
        <p class="main-2__title">
            У меня
        </p>
    <div>

        <div class="jq-selectbox jqselect" id="gadget-styler" style="display: inline-block; position: relative; z-index: 100;">
        <div class="jq-selectbox__select" style="position: relative" @click="showDrop">
        <div class="jq-selectbox__select-text">{{phone.name}}</div>
        <div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow">
        </div>
        </div>
        </div>
        <div class="jq-selectbox__dropdown" style="position: absolute;"  v-show="showList">
        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
            <li v-for="pho in phones" v-bind:class="pho.name == phone.name ? 'selected sel' : ''" @click="selectPhone(pho)">{{pho.name}}</li>
        </ul>
        </div>
        </div>
    </div>
        <div class="main-2__pict">
            <img v-bind:src="phone.image" alt="">
        </div>
    </div>
    <div class="main-2__options">
        <ul class="main-2__list">
            <li class="main-2__item" v-for="price in phone.prices">
                <p>
                    <span class="main-2__name" >{{price.title}}</span>
                    <span class="main-2__price">{{price.pr}}<img src="img/ruble.svg" alt="" ></span>
                </p>
            </li>

        </ul>
        <p class="main-2__help">
            Не нашли в списке свою неисправность? Звоните по номеру <span>8 800 300 40 67</span> мы поможем!
        </p>
    </div>
    </div>
    `,
    data : function(){
        return {
            phone : this.phones[0],
            showList: false,
        }
    },
    methods:{
        showDrop: function(){
            this.showList=!this.showList;
        },
        selectPhone : function (data)
        {
            this.showList=!this.showList;
            this.phone = data;
        }
    }
})
var phones = {
    phones:[
    {
        name: "Iphone 7",
        image: "img/iphone5.png",
        prices:[
            {
                title: "asd",
                pr: "1000"
            },

        ]
    },
    {
        name: "Iphone 6",
        image: "img/iphone6.png",
        prices:[
            {
                title: "asd",
                pr: "1000"
            },
        ]
    },
    {
        name: "Iphone 6s",
        image: "img/iphone6s.png",
        prices:[
            {
                title: "aghgsd",
                pr: "10324340"
            },
        ]
    },
    {
        name: "Iphone SE",
        image: "img/iphoneSE.png",
        prices:[
            {
                title: "asd",
                pr: "5436346"
            },
        ]
    },
    {
        name: "Iphone 5",
        image: "img/iphone5.png",
        prices:[
            {
                title: "asd",
                pr: "400"
            },
        ]
    },
    {
        name: "Iphone 5c",
        image: "img/iphone5c.png",
        prices:[
            {
                title: "asd",
                pr: "30"
            },
        ]
    },
    {
        name: "Iphone 5s",
        image: "img/iphone5s.png",
        prices:[
            {
                title: "asd",
                pr: "20"
            },
            {
                title: "asd",
                pr: "20"
            },
            {
                title: "asd",
                pr: "20"
            },
        ]
    }
],
}
var vue = new Vue({
  el: '#app',
  data: phones,
});
