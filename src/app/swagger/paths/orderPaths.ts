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
                clientId: {
                  type: 'number',
                },
                dataCreated: {
                  type: 'string',
                  format: 'date',
                },
              },
            },
          },
        },
      },
      responses: {},
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
