// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function()
{
    gapi.auth.init (function()
    {
        window.setTimeout (checkAuth, 1);
    });
}




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

    document.addEventListener ('deviceready', function()
    {
        if (cordova.platformId == "android")
        {
            alert("ANDROID");
        }

        else if (cordova.platformId == "browser")
        {
            alert("BROWSER mate");
        }
        /*
        if (navigator.notification) // Override default HTML alert with native dialog
        {
            window.alert = function (message)
            {
                navigator.notification.alert
                (
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
        */

    }, false);
}());