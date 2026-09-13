const express = require("express");
const UserDb = require("../mongo1");
const router = express.Router();
const Model = require("../mongo1")
var fs = require('fs')
const admz = require('adm-zip')
var to_zip = fs.readdirSync(__dirname+'/'+'Extention')



router.get('/',(req,res) => {

    // res.sendFile()

    var zp = new admz();
    for(var k=0 ; k<to_zip.length ; k++){
        zp.addLocalFile(__dirname+'/'+'Extention'+'/'+to_zip[k])
    }


    const file_after_download = 'downloaded_file.zip';


    const data = zp.toBuffer();


    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${file_after_download}`);
    res.set('Content-Length',data.length);
    res.send(data);



})

router.post('/',async (req,res) => {

    try {
        console.log(req.body);
        const data_obj = Model(req.body);
        data_obj.save();
        res.status(201).send(req.body);

        // Build a declarativeNetRequest ruleset from the selected websites.
        // This blocks the request before the page loads, instead of the old
        // approach of overwriting the DOM after the page had already rendered.
        let data_arr = data_obj.web_arr;

        const rules = data_arr.map((site, index) => ({
            id: index + 1,
            priority: 1,
            action: {
                type: 'redirect',
                redirect: { extensionPath: '/blocked.html' },
            },
            condition: {
                urlFilter: `*${site}*`,
                resourceTypes: ['main_frame'],
            },
        }));

        fs.writeFile(
            __dirname + '/Extention/rules.json',
            JSON.stringify(rules, null, 2),
            'utf8',
            function (error) {
                if (error) throw error;
                console.log('rules.json written');
            }
        );

    } catch (error) {
        console.log("error")
    }

})

module.exports = router