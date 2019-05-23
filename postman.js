var request = require("request");

var options = { method: 'POST',
  url: 'https://loads.ati.su/webapi/v1.0/loads/search',
  headers: 
   { 'Postman-Token': 'b9ff0b51-501e-423c-a2a2-8c3ccb9d9fc2',
     'cache-control': 'no-cache',
     'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Electron/2.0.18 Safari/537.36',
     referer: 'https://loads.ati.su/',
     origin: 'https://loads.ati.su',
     cookie: '_ym_uid=1558546935314193613; _ym_d=1558546935; did=MvO%2FVGwDsFKbjZb11K0OsaSTvay2psEEWdK7qg%2FnG4s%3D; _ym_isad=2; sid=b20c22faf6454e2cb5e27dc5b075ab2f; efid=VPVE%255CKD; last_read_updates=0; last_visit=1558530651622::1558548651622; _gat=1; _ym_visorc_51678=w; _ga=GA1.2.1747651011.1558546935; _gid=GA1.2.949287547.1558546935; AtiGeo=270_86_5_1; ASP.NET_SessionId=2icftmmb3ywguptl544lwn0u; itemsPerPage=10',
     'Content-Type': 'application/json',
     'content-length': '481',
     'accept-language': 'ru',
     'accept-encoding': 'gzip, deflate',
     accept: 'application/json' },
  body: 
   { page: 1,
     items_per_page: 10,
     filter: 
      { from: { id: '3611', type: '2', exact_only: false, radius: 0 },
        to: { id: '270', type: '2', exact_only: false, radius: 0 },
        dates: { date_option: 'manual', date_from: '2019-05-23', date_to: null },
        truck_type: 0,
        loading_type: 0,
        extra_params: 0,
        dogruz: null,
        sorting_type: 2,
        change_date: 0,
        show_hidden_loads: false,
        board_list: [],
        with_dimensions: false,
        with_auction: false },
     exclude_geo_dicts: true },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
