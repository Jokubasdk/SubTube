// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
   /* HomeView.prototype.template         = Handlebars.compile ($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile ($("#employee-list-tpl").html());
    EmployeeView.prototype.template     = Handlebars.compile ($("#employee-tpl").html());
    var service = new EmployeeService();
    var slider  = new PageSlider($('body'));

    service.initialize().done (function()
    {
        router.addRoute ('', function()
        {
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute ('employees/:id', function (id)
        {
            service.findById (parseInt(id)).done (function (employee)
            {
                slider.slidePage(new EmployeeView(employee).render().$el);
            });
        });

        router.start();
    });
*/
/*
    class Button
    {
        var mObject;

        button (string path)
        {
            mObject = document.createElement("object");
            mObject.type = "image/svg+xml";
            mObject.data = path;
            document.body.appendChild(mObject);

        //https://www.youtube.com/watch?v=LYalKR2W-DU

        }
    }
*/

    
    /* --------------------------------- Event Registration -------------------------------- */

    //Returns Mozilla if mozilla user agent:
    //navigator.userAgent.match (/(Mozilla)/i)

    document.addEventListener ('deviceready', function()
    {
        if (cordova.platformId == "browser")
        {
            var errorHandler = function (fileName, e)
            {
                var msg = '';

                switch (e.code)
                {
                    case FileError.QUOTA_EXCEEDED_ERR:
                        msg = 'Storage quota exceeded';
                        break;
                    case FileError.NOT_FOUND_ERR:
                        msg = 'File not found';
                        break;
                    case FileError.SECURITY_ERR:
                        msg = 'Security error';
                        break;
                    case FileError.INVALID_MODIFICATION_ERR:
                        msg = 'Invalid modification';
                        break;
                    case FileError.INVALID_STATE_ERR:
                        msg = 'Invalid state';
                        break;
                    default:
                        msg = 'Unknown error';
                        break;
                };

                console.log ('Error (' + fileName + '): ' + msg);
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

                else if (cordova.platformId == "android")
                {
                 //todo
                }
            }

            function openFile (fileName, successHandler)
            {
                window.resolveLocalFileSystemURL
                (
                    cordova.file.dataDirectory,
                    function (directoryEntry)
                    {
                        directoryEntry.getFile
                        (
                            fileName,
                            {},
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
                    function (fileEntry)
                    {
                        fileWriter.onwriteend = function (e)
                        {
                            // for real-world usage, you might consider passing a success callback
                            console.log('Write of file "' + fileName + '"" completed.');
                        };

                        fileWriter.onerror = function (e)
                        {
                            // you could hook this up with our global error handler, or pass in an error callback
                            console.log('Write failed: ' + e.toString());
                        };




                        var blob = new Blob([data], { type: 'text/plain' });
                        fileWriter.write(blob);
                    }
                );
            }
            /*)
                    window.resolveLocalFileSystemURL (cordova.file.dataDirectory, function (directoryEntry)
                    {
                        directoryEntry.getFile (fileName, {}, function (fileEntry)
                        {
                            fileEntry.createWriter (function (fileWriter)
                            {
                                fileWriter.onwriteend = function (e)
                                {
                                    // for real-world usage, you might consider passing a success callback
                                    console.log('Write of file "' + fileName + '"" completed.');
                                };

                                fileWriter.onerror = function (e)
                                {
                                    // you could hook this up with our global error handler, or pass in an error callback
                                    console.log('Write failed: ' + e.toString());
                                };

                                var blob = new Blob([data], { type: 'text/plain' });
                                fileWriter.write(blob);
                            }, errorHandler.bind(null, fileName));
                        }, errorHandler.bind(null, fileName));
                    }, errorHandler.bind(null, fileName) );
                }
*/
                function readFromFile(fileName, cb) {
                        var pathToFile = cordova.file.dataDirectory + fileName;
                        window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
                            fileEntry.file(function (file) {
                                var reader = new FileReader();

                                reader.onloadend = function (e) {
                                    cb(JSON.parse(this.result));
                                };

                                reader.readAsText(file);
                            }, errorHandler.bind(null, fileName));
                        }, errorHandler.bind(null, fileName));
                    }
/*
                createFile();

                function addFolder (title)
                {
                    write
                }

                writeToFile('example.json', { foo: 'bar' });

                readFromFile('example.json', function (data)
                {
                    var i=0;
                    for( key in data){
                        console.log (i+" key = " + key);
                        i=i+1;
                    }
                });
                */
        }

    }, false);
}());