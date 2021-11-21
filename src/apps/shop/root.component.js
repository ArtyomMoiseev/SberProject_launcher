import './style.css'
let html = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>Shop</title>\n' +
    '    <link rel="stylesheet" href="style.css">\n' +
    '</head>\n' +
    '<body>\n' +
    '    <header>\n' +
    '        <div class="header">\n' +
    '            <h2>Online-shop</h2>\n' +
    '        </div>\n' +
    '    </header>\n' +
    '    <main>\n' +
    '        <div class="content">\n' +
    '            <h2>Наши товары</h2>\n' +
    '            <div class="items">\n' +
    '                <div class="item">\n' +
    '                    <h2>Отличный зонт</h2>\n' +
    '                    <img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614558787_46-p-predmeti-na-belom-fone-61.png">\n' +
    '                </div>\n' +
    '                <div class="item">\n' +
    '                    <h2>Зачётное яблоко</h2>\n' +
    '                    <img src="https://yt3.ggpht.com/a/AATXAJwhO5qBnpmKtDow7McP4wC60NTviWwBY9ofjj3V=s900-c-k-c0xffffffff-no-rj-mo">\n' +
    '                </div>\n' +
    '                <div class="item">\n' +
    '                    <h2>Лейка молодёжная</h2>\n' +
    '                    <img src="https://i.pinimg.com/originals/a0/5c/a0/a05ca0af96cbaffe436386cfe5663570.png">\n' +
    '                </div>\n' +
    '                <div class="item">\n' +
    '                    <h2>Домашние животные</h2>\n' +
    '                    <img src="https://img-fotki.yandex.ru/get/9064/56195015.285/0_cd3bd_a0e0f5d7_XL.png">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </main>\n' +
    '    <footer>\n' +
    '        <h2>Инфраструктура, которую мы заслужили</h2>\n' +
    '    </footer>\n' +
    '</body>\n' +
    '</html>';

let template = { __html: html };

export default function Shop(props) {
  //return <section>{props.name} is mounted!</section>;
  return (<div dangerouslySetInnerHTML={template} />);
}

