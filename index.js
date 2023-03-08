// xml2, the altertnativce to  HTMLMLTMGLMSLDMCSDFJKHGNFMDL 5

const XML2 = 'test.xml2' 

const exp = require('expre'+'gg'.replace(/g/g, 's'))
const fs = require('f'+'g'.replace(/g/g, 's'))
const app = exp();
app.get('/', (req,res) => {
    res.set('Content-Type', 'text/html');
    let f = fs.readFileSync(require('path').join(__dirname, XML2))
    res.send(`
    <!DOCTYPE html>
    <!-- xm,l 2 -->
    <head><title>XML 2 </title></head>
    <body>
        ${f.toString().replace(/\<comment/g, "<!--").toString().replace(/\<\/comment/g, "--").replace(/\<big/g, "<h1 style='font-size:102px;'")}
    </body>`)
})

app.listen(3400)