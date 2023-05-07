/** 
// Imports the Dialogflow library
const dialogflow = require('@google-cloud/dialogflow');
const config = require('./config');
const credenciales = require("./client_secret_877456083206-d7igrknn862kmc073fk3cj51qvhaa8i0.apps.googleusercontent.com.json");
process.env.GOOGLE_APPLICATION_CREDENTIALS = './client_secret_877456083206-d7igrknn862kmc073fk3cj51qvhaa8i0.apps.googleusercontent.com.json'

/**
 * TODO(developer): UPDATE these variables before running the sample.
 */
/*/ projectId: ID of the GCP project where Dialogflow agent is deployed
 const projectId = credenciales.web.project_id;
// sessionId: String representing a random number or hashed user identifier
const sessionId = '123456';
// queries: A set of sequential queries to be send to Dialogflow agent for Intent Detection
const queries = [
   'Reserve a meeting room in Toronto office, there will be 5 of us',
   'Next monday at 3pm for 1 hour, please', // Tell the bot when the meeting is taking place
   //'B'  // Rooms are defined on the Dialogflow agent, default options are A, B, or C
 ]
// languageCode: Indicates the language Dialogflow agent should use to detect intents
// const languageCode = 'en';

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient({
  projectId,
  credenciales,
});
//console.log(sessionClient);

async function detectIntent(
  projectId,
  sessionId,
  query,
  contexts,
  languageCode
) {
  // The path to identify the agent that owns the created intent.
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  if (contexts && contexts.length > 0) {
    request.queryParams = {
      contexts: contexts,
    };
  }

  const responses = await sessionClient.detectIntent(request);
  return responses[0];
}

async function executeQueries(projectId, sessionId, queries, languageCode) {
  // Keeping the context across queries let's us simulate an ongoing conversation with the bot
  let context;
  let intentResponse;
  for (const query of queries) {
    try {
      console.log(`Sending Query: ${query}`);
      intentResponse = await detectIntent(
        projectId,
        sessionId,
        query,
        context,
        languageCode
      );
      console.log('Detected intent');
      console.log(
        `Fulfillment Text: ${intentResponse.queryResult.fulfillmentText}`
      );
      // Use the context from this response for next queries
      context = intentResponse.queryResult.outputContexts;
    } catch (error) {
      console.log(error);
    }
  }
}

executeQueries(projectId, sessionId, queries, "es");

module.exports = detectIntent;*/


// Configura las credenciales de autenticación utilizando un archivo JSON
const credentials = require('./config');
process.env.GOOGLE_APPLICATION_CREDENTIALS = '/path/to/credentials.json';

const dialogflow = require('@google-cloud/dialogflow');
const projectId = credentials.project_id; // Reemplazar con tu ID de proyecto de Dialogflow
const sessionId = '123456'; // Reemplazar con un ID de sesión único para tu usuario o aplicación


// Crea un nuevo cliente de Dialogflow utilizando las credenciales configuradas
const sessionClient = new dialogflow.SessionsClient({
    projectId,
    credentials,
});

// Crea una sesión de Dialogflow para tu usuario o aplicación
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

// Envía una consulta a Dialogflow utilizando la sesión y el cliente configurados
const request = {
    session: sessionPath,
    queryInput: {
        text: {
            text: 'hola',
            languageCode: 'es',
        },
    },
};

sessionClient.detectIntent(request)
    .then(responses => {
        const result = responses[0].queryResult;
        console.log(`Response: ${result.fulfillmentText}`);
    })
    .catch(err => {
        console.error('Error:', err);
    });

function getIntentName(response) {
    if (response.queryResult.intent === null) return null
    return response.queryResult.intent.displayName;
}

function getParameters(response) {
    return response.queryResult.parameters.fields;
}

function getResponseText(response) {
    return response.queryResult.fulfillmentText;
}

async function getRespuesta(texto) {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: texto,
                languageCode: 'es'
            },
        },
    };

    return sessionClient.detectIntent(request)
        .then(responses => {
            //console.log(responses[0]);
            //console.log(responses[0].queryResult.intent);

            //const result = responses[0].queryResult;
            //console.log(`Response: ${result.fulfillmentText}`);
            var respuesta = {
                intentName: getIntentName(responses[0]),
                parameters: getParameters(responses[0]),
                response: getResponseText(responses[0])
            }
            //console.log(respuesta);
            return respuesta;
        })
        .catch(err => {
            console.error('Error:', err);
            return `Error: ${err}`
        });

}


module.exports = { getRespuesta };