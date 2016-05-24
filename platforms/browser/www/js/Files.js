var errorHandler = function (fileName, e)
{
    console.log ("Error with file " + fileName + ":");
    console.log (e.name + ': ' + e.message);
}

function createFile (fileName)
{
    if (cordova.platformId == "browser")
    {
        window.resolveLocalFileSystemURL
        (
            cordova.file.dataDirectory,
            function (directoryEntry)
            {
                directoryEntry.getFile
                (
                    fileName,
                    { create: true },
                    function()
                    {
                        console.log (fileName + " was created");
                    },
                    errorHandler.bind (null, fileName)
                );
            },
            errorHandler.bind (null, fileName)
        );
    }
/*
todo
    else if (cordova.platformId == "android")
    {

    }
*/
}

function openFile (fileName, successHandler)
{
    window.resolveLocalFileSystemURL
    (
        cordova.file.dataDirectory + fileName,
        function (fileEntry)
        {
            fileEntry.file
            (
                successHandler,
                errorHandler.bind (null, fileName)
            );
        },
        errorHandler.bind (null, fileName)
    );
}

function writeToFile (fileName, data)
{
    data = JSON.stringify (data, null, '\t');

    openFile
    (
        fileName,
        function (file)
        {
            file.createWriter(function (fileWriter)
            {
                fileWriter.onwriteend = function (e)
                {
                    // for real-world usage, you might consider passing a success callback
                    console.log ('Write of file "' + fileName + '"" completed.');
                };

                fileWriter.onerror = function (e)
                {
                    // you could hook this up with our global error handler, or pass in an error callback
                    console.log ('Write failed: ' + e.toString());
                };

                var blob = new Blob ([data], { type: 'text/plain' });
                fileWriter.write (blob);
            }, errorHandler(fileName, null));
        }
    );
}

function readFromFile (fileName, cb)
{
    openFile
    (
        fileName,
        function (file)
        {
            var reader = new FileReader();

            reader.onloadend = function (e)
            {
                cb (JSON.parse (this.result) );
            };

            reader.readAsText (file);
        }
    );
}