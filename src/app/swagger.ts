import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentação TechChalleger API Lanchonete WS',
      version: '1.0.0',
    },
   
        paths: {
            '/api/customers': {                
                post: {
                tags: ['Clientes'],
                summary: 'Cadastrar Clientes',
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
                        description:"Sucesso",                         
                    },
                    400:{
                        description: 'Requisição inválida',
                    },
                    401:{
                        description: 'Acesso inválido',
                    },

                    500:{
                        description: 'Erro interno do servidor',
                    }
                }
                },
                get: {
                    tags: ['Clientes'],
                    summary: 'Listar Clientes',

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

            '/api/products': {            
                post: {
                tags: ['Produtos'],
                summary: 'Cadastrar Produtos',
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
                        description:"Sucesso",                         
                    },
                    400:{
                        description: 'Requisição inválida',
                    },
                    401:{
                        description: 'Acesso inválido',
                    },
                    500:{
                        description: 'Erro interno do servidor',
                    }
                }
                },
                get: {
                    tags: ['Produtos'],
                    summary: 'Listar Produtos',

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
                            description:'Produtos não encontrado',
                        },
                        500:{
                            description: 'Erro interno do servidor',
                        }
                    }
                },
                put:{
                    tags: ['Produtos'],
                    summary: 'Editar Produto',                    
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
                            description:"Sucesso",
                        },
                        400:{
                            description: 'Requisição inválida',
                        },
                        401:{
                            description: 'Acesso inválido',
                        },
                        404:{
                            description:'Produto não encontrado'
                        },
                        500:{
                            description: 'Erro interno do servidor',
                        }

                    }
                },
                delete:{
                    tags: ['Produtos'],
                    summary: 'Deletar Produto',
                    parameters: [
                        {                          
                          name: 'id',
                          in: 'query',
                          description: 'Codigo do produto',
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
            
            '/api/orders': {            
                post: {
                tags: ['Pedidos'],
                summary: 'Registrar novo pedido',
                }
            },
            
            '/api/orders/payment': {            
                post: {
                tags: ['Pedidos'],
                summary: 'Registrar pagamento pedido',
                }
            }            
        },
        
    },

    apis: [], 
  }
 


const swaggerSpec = swaggerJsdoc(options)
export default swaggerSpec
