const ErrosMessage = {
  USUARIO_JA_EXISTE: "User already exists",
  PRODUTO_JA_EXISTE: "PRODUCT ALREADY EXISTS",
  PRODUTO_NAO_LOCALIZADO: "PRODUCT NOT EXISTS",
  USUARIO_NAO_LOCALIZADO: "User not located",
  DEFAULT_MESSAGE: "An Error occurred when performing transaction",
  PAGAMENTO_NAO_PROCESSADO: "COULD NOT PROCESS PAYMENT",
  PAGAMENTO_NAO_AUTORIZADO: "PAYMENT AUTHORIZATION FAILED",
  PAGAMENTO_NAO_LOCALIZADO: "COULD NOT FIND PAYMENT BY ID",
  LIST_NOT_LOCALIZED: "List not localized",
  NUMBER_OF_CPF_MUST_CONTAIN_DIGITS: "The number of CPF must contain 11 digits",
  ENTER_VALID_NUMBER: "Enter a valid number",
  ENTER_PAGE_VALID: "Enter page valid",
  INFORM_NUMBER_CPF: "Inform the number of Cpf",
  ITEMS_WITH_QUANTITY_ZEROED: "Items with quantity zeroed",
  NECESSARY_INCLUD_ITEM: "Necessary Includ the one item.",
} as const

export default ErrosMessage
