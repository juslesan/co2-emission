let http = require('http'),
unzipper = require('unzipper'),
fs = require('fs');

const worldbankDownloadCSV = (url, filename) => {

    let request = http.get(url, function(response) {
        if (response.statusCode === 200) {
            let file = fs.createWriteStream("external_apis/data/" + filename);
            response.pipe(file);
        }
        // Add timeout.
        request.setTimeout(12000, function () {
            request.abort();
        });
    });

}

const worldbankExtractZip = (filename) => { 
    
    fs.createReadStream('external_apis/data/' + filename + '.zip')
    .pipe(unzipper.Parse())
    .on('entry', function (entry) {
      var fileName = entry.path;
      if (!fileName.includes("Metadata")) {
        entry.pipe(fs.createWriteStream('external_apis/data/' + filename + '.csv'));
      } else {
        entry.autodrain();
      }
    });
}

module.exports = {worldbankDownloadCSV, worldbankExtractZip}