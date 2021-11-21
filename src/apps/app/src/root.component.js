import './style.css'
let html = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <link rel="stylesheet" href="style.css">\n' +
    '    <title>Music</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <header>\n' +
    '        <h2>Listen your music here!!!</h2>\n' +
    '    </header>\n' +
    '    <div class="news">\n' +
    '        <div class="track">\n' +
    '            <h2>Track 1</h2>\n' +
    '        </div>\n' +
    '        <div class="track">\n' +
    '            <h2>Track 2</h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="track">\n' +
    '            <h2>Track 3</h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="track">\n' +
    '            <h2>Track 4</h2>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <footer>\n' +
    '        <h2>simple music service</h2>\n' +
    '    </footer>\n' +
    '</body>\n' +
    '</html>';
let template = { __html: html };

export default function Root(props) {
  //return <section>{props.name} is mounted!</section>;
  return (<div dangerouslySetInnerHTML={template} />);
}
