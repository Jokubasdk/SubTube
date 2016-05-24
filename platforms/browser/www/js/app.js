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
function onLoad()
{
    document.addEventListener ('deviceready', onDeviceReady, false);
}

function onDeviceReady()
{
    if (cordova.platformId == "browser" && navigator.userAgent.match (/(Chrome)/i) )
        window.addEventListener ('filePluginIsReady', onFilePluginIsReady, false);

    else
        onFilePluginIsReady();
}

function onFilePluginIsReady()
{
    if (cordova.platformId == "browser")
    {
        createFile  ('UserFolders.json');
        writeToFile ('UserFolders.json', {foo: 'bar'} );
        readFromFile
        (
            'UserFolders.json',
            function (data)
            {
                console.log (data);
            }
        );
    }
}