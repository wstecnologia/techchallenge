const ErrosMessage = {
  USUARIO_JA_EXISTE: "USER ALREADY EXISTS",
  PRODUTO_JA_EXISTE: "PRODUCT ALREADY EXISTS",
  PRODUTO_NAO_LOCALIZADO: "PRODUCT NOT EXISTS",
  USUARIO_NAO_LOCALIZADO: "USER NOT LOCATED",
  DEFAULT_MESSAGE: "AN ERROR OCCURRED WHEN PERFORMING TRANSACTION",
  PAGAMENTO_NAO_PROCESSADO: "COULD NOT PROCESS PAYMENT",
  PAGAMENTO_NAO_AUTORIZADO: "PAYMENT AUTHORIZATION FAILED",
  PAGAMENTO_NAO_LOCALIZADO: "COULD NOT FIND PAYMENT BY ID",
  LIST_NOT_LOCALIZED: "LIST NOT LOCALIZED",
  NUMBER_OF_CPF_MUST_CONTAIN_DIGITS: "THE NUMBER OF CPF MUST CONTAIN 11 DIGITS",
  ENTER_VALID_NUMBER: "ENTER A VALID NUMBER",
  ENTER_PAGE_VALID: "ENTER PAGE VALID",
  INFORM_NUMBER_CPF: "INFORM THE NUMBER OF CPF",
} as const

export default ErrosMessage
