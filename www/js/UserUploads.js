// Define some variables used to remember state.
var nextPageToken, prevPageToken;

// After the API loads, call a function to get the uploads playlist ID.
function handleAPILoaded()
{
    requestSubscriptionList();
}

function requestSubscriptionList (pageToken)
{
    $('#video-container').html('');

    var requestOptions =
    {
        mine: true,
        part: 'snippet',
        maxResults: 10
    };

    if (pageToken)
        requestOptions.pageToken = pageToken;

    var request = gapi.client.youtube.subscriptions.list (requestOptions);

    request.execute (function (response)
    {
        // Only show pagination buttons if there is a pagination token for the
        // next or previous page of results.
        nextPageToken = response.result.nextPageToken;
        var nextVis = nextPageToken ? 'visible' : 'hidden';
        $('#next-button').css ('visibility', nextVis);
        prevPageToken = response.result.prevPageToken
        var prevVis = prevPageToken ? 'visible' : 'hidden';
        $('#prev-button').css ('visibility', prevVis);

        var subscriptionList = response.result.items;

        if (subscriptionList)
        {
            for (index in subscriptionList)
            {
                displayResult (subscriptionList [index], index);
            }
        }

        else
        {
            $('#video-container').html ('Sorry you have no uploaded videos');
        }
    });
}

// Create a listing for a video.
function displayResult (subscriptionChannel, index)
{
    $('#video-container').append ('<div class="subscriptionBox">'+ subscriptionChannel.snippet.title + '<br />' +
                                  '<img src="' + subscriptionChannel.snippet.thumbnails.high.url + '" width="99%" height="49%"/>' + '</div>' );
}
// Retrieve the next page of videos in the playlist.
function nextPage()
{
    requestSubscriptionList (nextPageToken);
}

// Retrieve the previous page of videos in the playlist.
function previousPage()
{
    requestSubscriptionList (prevPageToken);
}