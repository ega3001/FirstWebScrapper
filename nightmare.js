/* eslint-disable no-console */
var needle = require('needle');
var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

data = {
  "page":1,
  "items_per_page":10,
  "filter":
    {
      "from":
      {
        "id":"1",
        "type":"0",
        "exact_only":false,
        "radius":0
      },
      "to":
      {
        "id":"2",
        "type":"0",
        "exact_only":false,
        "radius":0
      },
      "weight":
      {
        "min":"2",
        "max":"4"
      },
      "dates":
      {
        "date_option":"manual",
        "date_from":"2019-05-19",
        "date_to":null
      },
      "truck_type":"3",
      "loading_type":0,
      "extra_params":0,
      "dogruz":null,
      "sorting_type":2,
      "change_date":0,
      "show_hidden_loads":false,
      "board_list":[],
      "with_dimensions":false,
      "with_auction":false
    },
    "exclude_geo_dicts":true
  }
// user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Electron/2.0.18 Safari/537.36'
user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
Accept = 'application/json'
// Accept-Encoding = 'gzip, deflate'
// Accept-Language = 'ru'
// Connection = 'keep-alive'
// Cookie:last_visit=1558274905516::1558292905516; _gat=1; _ym_uid=1558292906456950996; _ym_d=1558292906; _ga=GA1.2.1907926975.1558292906; _gid=GA1.2.577523200.1558292906; _ym_visorc_51678=w; did=dJntb6Sft0Y3nBkKUOaLvbv09skQ%2B%2F5U4MdLMYaDij0%3D; _ym_isad=2; tmr_detect=0%7C1558292907970; sid=3d25ec39703e40688e5bdef474a4d002; efid=VPVE%255CKD
// Host = 'id.ati.su'
// Referer = 'https://id.ati.su/login/'
// Upgrade-Insecure-Requests = 1
// User-Agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Electron/2.0.18 Safari/537.36'
Content_Type = 'application/json;charset=UTF-8'
Origin = "https://loads.ati.su"
Referer = "https://loads.ati.su/"

nightmare
  .goto('https://id.ati.su/login/')
  .type('#login', 'ega3001')
  .type('#password', 'raexedae4j')
  .click('#action-login')
  .wait(1000)//?
  .inject("js", "jquery.js")
  .cookies.get()
  .then(cookie => {
    // console.log(cookie);
    prepare_cookie = [];
    for (var i = cookie.length - 1; i >= 0; i--) {
      prepare_cookie.push(JSON.stringify(cookie[i]));
    }
    // console.log(prepare_cookie);
    return new Promise((resolve, reject)=>{
      needle('post', 'https://loads.ati.su/webapi/v1.0/loads/search', data, {cookies: cookie, 
                                                                            // compressed: true, 
                                                                            accept: Accept, 
                                                                            // connection: Connection, 
                                                                            user_agent: user_agent, 
                                                                            content_type: Content_Type,
                                                                            origin: "https://loads.ati.su",
                                                                            referer: "https://loads.ati.su/"
                                                                          })
      .then(result =>{
        resolve(result);
        console.log(result);
        // console.log(result['req']['ClientRequest']['_header']);
      }).catch(error => {
        reject(error);
      });
    })
  })
 // .evaluate(function() {
    
 //  }) 
  // .end()
  .then(function(result) {
    // console.log(result)
  })
  .catch(function(error) {
    // console.error('Search failed:', error)
  })


function getRoad(data){
  needle.post('https://loads.ati.su/webapi/v1.0/loads/search', data, (err, res)=>{
    // console.log(err)
    // console.log(res)
  })
}