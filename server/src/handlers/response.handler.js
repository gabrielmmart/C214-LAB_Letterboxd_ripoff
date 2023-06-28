const responseWithData = (res, statusCode, data) => res.status(statusCode).json(data)

const error = (res) => responseWithData(res, 500, {
    status: 500,
    message: "Ops! Algo de errado!"
})

const badrequest = (res, message) => responseWithData(res, 400, {
    status: 400,
    message
})

const ok = (res, data) => responseWithData(res, 200, data)

const created = (res, data) => responseWithData(res, 201, data)

const unauthorize = (res) => responseWithData(res, 401, {
    status: 401,
    message: "Não autorizado"
})

const notfound = (res) => responseWithData(res, 404, {
    status: 404,
    message: "Recurso não encontrado"
});

export default {
    error,
    badrequest,
    ok,
    created,
    unauthorize,
    notfound
};