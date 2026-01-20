const merge=reuire('deepmerge')
const wdioConf=require('/wdio.conf.js')

exports.config=merge(wdioConf.config,
    {
        baseUrl:"",
        timeout:5000,

        mochaOpt:{
            grep:"sanity",
            timeout:60000,
            ui:"bdi"
        }
    })
