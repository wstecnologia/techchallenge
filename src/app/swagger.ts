import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Techchalleger Api Lanchonete WS Documentation',
      version: '1.0.0',
    },
   
        paths: {
            '/api/customers': {                
                post: {
                tags: ['Customers'],
                summary: 'Register Customers',
                requestBody: {
                    content:{
                        'application/json':{
                            schema:{
                                type:'object',
                                properties:{
                                    nome:{
                                        type:'string',
                                        example:"João Pereira"
                                    },
                                    email:{
                                        type:'string',
                                        example:"joaopereira@ws.com.br"
                                    },
                                    cpf:{
                                        type:'string',
                                        example:"12345678909"
                                    },                            
                                }
                            }
                        }
                    }
                },
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

                    500:{
                        description: 'Internal Server Error',
                    }
                }
                },
                get: {
                    tags: ['Customers'],
                    summary: 'List customers',

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
            '/api/customers/cpf':{
                get:{
                    tags: ['Customers'],
                    summary: 'Consult customer by CPF',
                    
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

            '/api/products': {            
                post: {
                tags: ['Products'],
                summary: 'Register Product',
                requestBody: {
                    content:{
                        'application/json':{
                            schema:{
                                type:'object',
                                properties:{
                                    name:{
                                        type:'string',
                                        example:"Nome do produto"
                                    },
                                    description:{
                                        type:'string',
                                        example:"Nome do produto"
                                    }, 
                                    category:{
                                        type:'string',
                                        example:"Nome do produto"
                                    },                                                               
                                    price:{
                                        type:'number',
                                        example:'Preço do produto a ser alterado '                                        
                                    },
                                    image:{
                                        type:'number',
                                        example:'Preço do produto a ser alterado '                                        
                                    },                            
                                }
                            }
                        }
                    }
                },
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

                    500:{
                        description: 'Internal Server Error',
                    }
                }
                },
                get: {
                    tags: ['Products'],
                    summary: 'List All Products',

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
                },
                put:{
                    tags: ['Products'],
                    summary: 'Edit Product',                    
                    requestBody:{
                        content:{
                            
                            'application/json':{
                                schema:{
                                    properties:{
                                        id:{
                                            type:'number',
                                            example:12345
                                        },
                                        name:{
                                            type:'string',
                                            example:"Nome do produto"
                                        },
                                        description:{
                                            type:'string',
                                            example:"Descrição do produto"
                                        }, 
                                        category:{
                                            type:'string',
                                            example:"Categoria do produto"
                                        },                                                               
                                        price:{
                                            type:'number',
                                            example:0.00                                       
                                        },
                                        image:{
                                            type:'image',
                                            example:'Imagem do produto a ser alterado '                                        
                                        },   
                                    }
                                }
                            }
                        }
                    },
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
                            description: 'Product not found'
                        },
                        500:{
                            description: 'Internal Server Error',
                        }

                    }
                },
                delete:{
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
                          }
                        }
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
                            description:'Produto não encontrado',
                        },
                        500:{
                            description: 'Erro interno do servidor',
                        }
                    }
                }
            },  
            
            '/api/orders/status': {            
                post: {
                tags: ['Orders'],
                summary: 'Return list of order by status',
                }
            },
            '/api/orders/update-status': {            
                post: {
                tags: ['Orders'],
                summary: 'Update status order',
                }
            },
            
            
            '/orders/add-item': {            
                post: {
                tags: ['Orders'],
                summary: 'Register item in order',
                }
            },
            '/api/orders/payment': {            
                post: {
                tags: ['Orders'],
                summary: 'Register payment request',

                }
            }            
        },
        
    },

    apis: [], 
  }
 


const swaggerSpec = swaggerJsdoc(options)
export default swaggerSpec
