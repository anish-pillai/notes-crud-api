'use strict';
const DynamoDB = require('aws-sdk/clients/dynamodb');
const documentClient = new DynamoDB.DocumentClient({ region: 'us-east-1' });

module.exports.createNote = async (event, context, callBack) => {
  const body = JSON.parse(event.body);
  try {
    const params = {
      TableName: 'notes',
      Item: {
        notesId: data.id,
        title: data.title,
        body: data.body,
      },
      ConditionExpression: 'attribute_not_exists(notesId)',
    };

    await documentClient.put(params).promise();
    callBack(null, {
      statusCode: 201,
      body: JSON.stringify(body),
    });
  } catch (error) {
    callBack(null, {
      statusCode: 500,
      body: JSON.stringify(error.message),
    });
  }
  return {
    statusCode: 201,
    body: JSON.stringify('Created notes successfully!'),
  };
};

module.exports.updateNote = async (event) => {
  const noteId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify('Updated ' + noteId + ' successfully!'),
  };
};
module.exports.deleteNote = async (event) => {
  const noteId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify('Deleted ' + noteId + ' successfully!'),
  };
};
module.exports.getAllNotes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify('All notes are returned successfully!'),
  };
};
