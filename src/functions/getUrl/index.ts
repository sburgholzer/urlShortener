// lambda
import {formatJsonResponse} from '@libs/apiGateway';
import { dynamo } from '@libs/dynamo';
import {APIGatewayProxyEvent} from 'aws-lambda';


export const handler = async (event: APIGatewayProxyEvent) => {
    try {
        const tableName = process.env.urlTable;
        const { code } = event.pathParameters || {};
        if (!code){
            return formatJsonResponse({
                statusCode: 400,
                data: {
                    message: "missing code in path",
                }
            });
        }

        const record = await dynamo.get(code, tableName);

        const originalUrl = record.originalUrl;
        

        return formatJsonResponse({
            data: {
                originalUrl
            }
        });

    } catch (error) {
        console.log("error", error)
        return formatJsonResponse({
            statusCode: 502,
            data: {
                message: error.message,
            }
        })
    }
}