export const customerPath = {
    '/api/customers/cpf':{
        get:{
            tags: ['Idendification'],
            summary: 'Idendification customer by CPF',
            parameters: [
                {
                    name: 'cpf',
                    in: 'query',
                    description: 'Cpf Number',
                    required: true,
                    schema: {
                    type: 'string',
                    }
                },

            ],
            responses:{
                200:{
                    description:"Success",
                },
                400:{
                    description: 'Invalid Request',
                },
                401:{
                    description: 'Invalid Access',
                },
                404:{
                    description:"Products not found",
                },
                500:{
                    description: 'Internal Server Error',
                }
            }
        }
    },

    '/api/customers': {
    post: {
        tags: ['Customers'],
        summary: 'Register Customers',
        requestBody: {
        content: {
            'application/json': {
            schema: {
                type: 'object',
                properties: {
                name: {
                    type: 'string',
                    example: 'João Pereira',
                },
                email: {
                    type: 'string',
                    example: 'joaopereira@ws.com.br',
                },
                cpf: {
                    type: 'string',
                    example: '12345678909',
                },
                },
            },
            },
        },
        },
        responses: {
        201: {
            description: 'Created',
        },
        200: {
            description: 'Success',
        },
        400: {
            description: 'Invalid Request',
        },
        401: {
            description: 'Invalid Access',
        },

                500:{
                    description: 'Internal Server Error',
                }
            }
    },

    get: {
        tags: ['Customers'],
        summary: 'List customers',
        parameters: [
            {                          
                name: 'page',
                in: 'query',
                description: 'Page Number',
                required: true,
                default:0,
                schema: {
                type: 'number',                                                
                }
            },

        ],
        responses:{
            200:{
                description:"Sucesso",
            },
            400:{
                description: 'Requisição inválida',
            },
            401:{
                description: 'Acesso inválido',
            },
            404:{
                description:'Clientes não encontrado',
            },
            500:{
                description: 'Erro interno do servidor',
            }
        }
    },
    },   
}