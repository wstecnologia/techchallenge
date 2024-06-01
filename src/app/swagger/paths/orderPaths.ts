export const orderPaths = {
    '/api/orders/new': {            
        post: {
        tags: ['Orders'],
        summary: 'Create new order',
        requestBody:{
            content:{
                'application/json':{
                    schema:{
                        type:'object',
                        properties:{
                            clientId:{
                                type:"number"
                            },
                            dataCreated:{
                                type:"string",
                                format:"date"
                            },
                            
                            
                        }
                    }
                }
            }
        },
        responses:{

        }
        }
    }, 
    '/api/orders/status': {            
        get: {
        tags: ['Orders'],
        summary: 'Return list of order by status',
        parameters: [
            {                          
                name: 'Sector Code',
                in: 'query',
                description: 'Sector Code',
                required: true,
                schema: {
                type: 'number',                                                
                }
            }
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
    500: {
    description: 'Internal Server Error',
    },
    },
    },
    get: {
    tags: ['Products'],
    summary: 'List All Products',
    parameters: [
    {
    name: 'page',
    in: 'query',
    description: 'Page Number',
    required: true,
    default: 0,
    schema: {
        type: 'number',
    },
    },
    ],
    responses: {
    200: {
    description: 'Success',
    },
    400: {
    description: 'Invalid Request',
    },
    401: {
    description: 'Invalid Access',
    },
    404: {
    description: 'Products not found',
    },
    500: {
    description: 'Internal Server Error',
    },
    },
    },
    put: {
    tags: ['Products'],
    summary: 'Edit Product',
    requestBody: {
    content: {
    'application/json': {
        schema: {
        properties: {
            id: {
            type: 'number',
            example: 12345,
            },
            name: {
            type: 'string',
            example: 'Nome do produto',
            },
            description: {
            type: 'string',
            example: 'Descrição do produto',
            },
            category: {
            type: 'string',
            example: 'Categoria do produto',
            },
            price: {
            type: 'number',
            example: 0.0,
            },
            image: {
            type: 'image',
            example: 'Imagem do produto a ser alterado ',
            },
        },
        },
    },
    },
    },
    responses: {
    200: {
    description: 'Success',
    },
    400: {
    description: 'Invalid Request',
    },
    401: {
    description: 'Invalid Access',
    },
    404: {
    description: 'Product not found',
    },
    500: {
    description: 'Internal Server Error',
    },
    },
    },
    delete: {
    tags: ['Products'],
    summary: 'Delete Product',
    parameters: [
    {
    name: 'id',
    in: 'query',
    description: 'Product Code',
    required: true,
    schema: {
        type: 'number',
    },
    },
    ],
    responses: {
    200: {
    description: 'Sucesso',
    },
    400: {
    description: 'Requisição inválida',
    },
    401: {
    description: 'Acesso inválido',
    },
    404: {
    description: 'Produto não encontrado',
    },
    500: {
    description: 'Erro interno do servidor',
    },
    },
    },
    },
    '/api/orders/update-status': {
    put: {
    tags: ['Orders'],
    summary: 'Update order status',
    parameters: [
    {
    name: 'Orders Code ',
    in: 'query',
    description: 'Sector Code',
    required: true,
    schema: {
        type: 'number',
    },
    },
    {
    name: 'Sector Code',
    in: 'query',
    description: 'Sector Code',
    required: true,
    schema: {
        type: 'number',
    },
    },
    ],
    },
    },

    '/orders/add-item': {
    post: {
    tags: ['Orders'],
    summary: 'Register item in order',
    },
    },
    '/api/orders/payment': {
    post: {
    tags: ['Orders'],
    summary: 'Register payment request',
    },
    },
}