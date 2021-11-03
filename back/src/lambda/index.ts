export const handler = async ( event:any = {} ): Promise<any> => {
    const res = {
        content: [{
                "name":"test1_",
                "url":"http://example.com",
                "date":"20211103"
            },{
                "name":"test2_",
                "url":"http://example.com",
                "date":"20211102"
            },{
                "name":"test3_",
                "url":"http://example.com",
                "date":"20211101"
            }]
    }
    return {
        statusCode: 200,
        body: JSON.stringify(res),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, GET",            
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type":"applications.json"
        }
    }
}