// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Usuario from "App/Models/Usuario";

export default class UsuariosController {

    async index({request}){
        const {nome} = request.only('nome')
        let usuario = Usuario.query()
        if (nome) {
            usuario.where('nome', nome)
        }
        return usuario
    }

    async show({request}){
        const id = request.param('id')
        return await Usuario.findOrFail(id)
    }

    async store({request}){
        const dados = await request.all()
        return Usuario.create(dados)
    }

    async update({request}){
        const dados = await request.all()
        const id = request.param('id')
        const usuario = await Usuario.findOrFail(id)
        const mudanca = usuario.merge(dados).save()
        return mudanca
    }

    async destroy({request}){
        const id = request.param('id')
        const usuario = await Usuario.findOrFail(id)
        const apaga = usuario.delete()
        return apaga
    }
}
