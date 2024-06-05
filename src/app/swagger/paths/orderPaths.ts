export const orderPaths = {
  '/api/orders/new': {
    post: {
      tags: ['Orders'],
      summary: 'Create new order',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                customerId: {
                  type: 'string',
                  required: true,
                },
                observation: {
                  type: 'string',
                },

                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      productId: {
                        type: 'string',
                        required: true,
                      },
                      productDescription: {
                        type: 'string',
                      },
                      productPrice: {
                        type: 'number',
                      },
                      quantity: {
                        type: 'number',
                        required: true,
                      },
                    },
                  },
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
        201: {
          description: 'Created',
        },
        400: {
          description: 'Invalid Request',
        },
        401: {
          description: 'Invalid Access',
        },
        500: {
          description: 'Internal Server Error',
        },
      },
    },
  },

  '/api/orders/list': {
    get: {
      tags: ['Orders'],
      summary: 'List All Orders',
      parameters: [
        {
          name: 'page',
          in: 'query',
          description: 'Number of page',
          default:0,
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
  },

  '/api/orders/payment': {
    post: {
      tags: ['Orders'],
      summary: 'Register payment request',
      
    },
  },
  '/api/orders/status':{
    put:{
        tags:['Orders'],
        sumary:'Alter Order Status',
        parameters: [
            {
              name: 'orderId',
              in: 'query',
              description: 'Number of Id Order',              
              schema: {
                type: 'number',
              },
            },
            {
                name: 'status',
                in: 'query',
                description: 'Number of Id Status',              
                schema: {
                  type: 'string',
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
    }
  }
}
