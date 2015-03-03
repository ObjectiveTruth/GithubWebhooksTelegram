var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec,
    child;
var moment = require('moment');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Constants
var DEFAULTPORT = 4567;


//Checking if argument is passed, use DEFAULTPORT if not
var myArgs = process.argv.slice(2);
var portNumber = DEFAULTPORT;

if(!isNaN(myArgs[0]) && myArgs[0] > 0 && myArgs[0] < 65536){
    portNumber = myArgs[0];
    app.listen(portNumber);
    console.log('listenning on port ' + portNumber + '...');
    
}
else{
    console.log('No valid port number specified, using default (' + DEFAULTPORT + ')');
    app.listen(portNumber);
    console.log('listenning on port ' + portNumber + '...');
}





app.post('/githooks/:chatroom', function(request, response){
    var refs = request.body.ref;
    var repositoryName = request.body.repository.name;
    var defaultBranch = request.body.repository.default_branch;
    var committer = request.body.commits[0].committer.name;
    var commitHash = (request.body.commits[0].id);
    var commitMessage = request.body.commits[0].message;
    var commitAuthor = request.body.commits[0].author.name;

    var chatRoom = request.params.chatroom;

    console.log("========");
    console.log("Received");
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    console.log("    Destination Chatroom:\n " + chatRoom);
    var message = "\"**" + repositoryName + "**\\n    " + defaultBranch + "\\n"
        + "committed by\\n    " + committer + ":\\n"
        + commitHash.substring(0, 8) + ":\\n    " + commitMessage + "\\n-" + commitAuthor
        + "\"";

    console.log('    message to be sent:');
    console.log(message + "\n");
        


    var cliCommand = 'tmux send-keys -t githubWebhooksTelegram \"msg ' + chatRoom + ' \"'; 
    var cliCommand2 = 'tmux send-keys -t githubWebhooksTelegram \" \\\" \"' + message
        + '\" \\\" \" Enter';
             //+ message + '\" Enter';
//  console.log('    CLI Command: ');
//  console.log(cliCommand);

    child = exec(cliCommand , function(error, stdout, stderr){

        if(error != null){
            console.log('exec error: ' + error);
        }
    });

    child = exec(cliCommand2 , function(error, stdout, stderr){

        if(error != null){
            console.log('exec error: ' + error);
        }
    });
    response.sendStatus(200);

    console.log("========");
    console.log('listenning on port ' + portNumber + '...');

});

