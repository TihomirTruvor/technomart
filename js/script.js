const goods = [ // объект состоящий из списка свойств товаров
    { title: 'Перфоратор BOSH BFG 9000', price: 15000, oldPrice: 17000, imgs:'img/perforator-4.jpg' },
    { title: 'Перфоратор BOSH BFG 6000', price: 11000, oldPrice: 13000, imgs:'img/perforator-1.jpg' },
    { title: 'Перфоратор BOSH BFG 3000', price: 8000, oldPrice: 10000, imgs:'img/perforator-2.jpg' },
    { title: 'Перфоратор BOSH BFG 2000', price: 6000, oldPrice: 8000, imgs:'img/perforator-1.jpg' }
    ];

const baseURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
//const goodsURL = '/catalogData.json';

const service = (url) => new Promise ((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    const loadHendler = () => {
        resolve(JSON.parse(xhr.response));
    }
    xhr.onload = loadHendler;
    xhr.send();
})

service().then((data) => {

})

class GoodsItem { // создали класс для превью товара
    constructor ({imgs = 'Здесь должна быть картинка товара', title = 'Товар', price = 'Неизвестно', oldPrice = 'Неизвестно' }) {
        this.imgs = imgs;
        this.title = title;
        this.price = price;
        this.oldPrice = oldPrice;
    }

    render() { // Записали в прототип функцию рендера превью товара
        return `<li class="index-catalog-item">
                    <img src="${this.imgs}" width="220" height="170" alt=" ">
                    <h3 class="catalog-item-name">${this.title}</h3>
                    <div class="old-price">${this.oldPrice} Р.</div>
                    <div class="new-price">${this.price} P.</div>
                <div class="actions">
                    <a class="button-order" href="#">Купить</a>
                    <a class="button-bookmarks" href="#">В закладки</a>
                </div>
            </li>`;
    }
};

class GoodsList { // создали класс для списка товаров
    goods = [];
    

    fetchGoods() { // метод для приёма c сервера

        return service(baseURL).then((data) => {
            this.goods = data;
        })
    };

    render() { // Метод рендера списка товаров
        let goodsList = this.goods.map((item) => {
            const goodsItem = new GoodsItem(item); 
            return goodsItem.render();
        });
        document.querySelector('.popular-goods-list').innerHTML = goodsList.join('');
    }

    calculateSum () { // Метод для суммы товаров
        return this.goods.reduce((prev, {price}) => {
            return prev + price;
        }, 0)
    };

};

const goodsList = new GoodsList(); // Создали объект goodsList

goodsList.fetchGoods().then(() => {
    goodsList.render(); // Вызов метода рендера
}); // Вызов метода

const res = goodsList.calculateSum(); // Вызов функции суммы

    