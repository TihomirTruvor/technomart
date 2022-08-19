const goods = [ // объект состоящий из списка свойств товаров
    { title: 'Перфоратор BOSH BFG 9000', price: 15000, oldPrice: 17000, img:'img/perforator-4.jpg' },
    { title: 'Перфоратор BOSH BFG 6000', price: 11000, oldPrice: 13000, img:'img/perforator-1.jpg' },
    { title: 'Перфоратор BOSH BFG 3000', price: 8000, oldPrice: 10000, img:'img/perforator-2.jpg' },
    { title: 'Перфоратор BOSH BFG 2000', price: 6000, oldPrice: 8000, img:'img/perforator-1.jpg' },
    ];

const renderGoodsItem = ({title = 'Товар', price = 'Неизвестно', oldPrice = 'Неизвестно', img = 'Здесь должна быть картинка товара'}) => {  /* функция 
рендера превью товара с дефолтными аргументами и деструктуризацией*/
    return `<li class="index-catalog-item">
                    <img src="${img}" width="220" height="170" alt=" ">
                    <h3 class="catalog-item-name">${title}</h3>
                    <div class="old-price">${oldPrice} Р.</div>
                    <div class="new-price">${price} P.</div>
                <div class="actions">
                    <a class="button-order" href="#">Купить</a>
                    <a class="button-bookmarks" href="#">В закладки</a>
                </div>
            </li>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map((item) => renderGoodsItem(item)); /* выполнили метод map передав 
    значения из массива goods*/
    document.querySelector('.popular-goods-list').innerHTML = goodsList.join(''); /* подставляем в класс .popular-goods-list сформированный массив goodsList
      и склеиваем эменты массива в строку с помощью метода .join*/
}

renderGoodsList(goods);
    