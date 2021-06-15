'use strict'
const Subject = use('App/Models/Subject')

class SubjectController {
    // get all
    async index({ request, auth, response }) {
        try {
            const subject = await Subject.all()
            return subject
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                message: error.message
            })
        }
    }
    // get one
    async show({ request, auth, response }) {
        try {
            return await Subject.where({ "_id": request.params.id }).fetch()
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                message: error.message
            })
        }
    }
    // store
    async store({ request, auth, response }) {
        try {
            let subject = new Subject()
            subject.code = request.input("code")
            subject.name_th = request.input("name_th")
            subject.name_en = request.input("name_en")

            let success = await subject.save()
            return response.status(201).json({
                status: 'ok',
                message: 'subject is registered',
                success: success,
                subjectID: subject['_id']
            })
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                debug_error: error.message,
            })
        }
    }

    //update
    async update({ request, auth, response }) {
        try {
            let success = await Subject.where({ "_id": request.params.id }).update(request.all())
            return response.status(201).json({
                status: 'ok',
                message: 'subject is update',
                success: success != null,
                subjectID: request.params.id
            })
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                debug_error: error.message,
            })
        }
    }

    //delete
    async destroy({ request, auth, response }) {
        try {
            let success = await Subject.where({ "_id": request.params.id }).delete()
            return response.status(201).json({
                status: 'ok',
                message: 'subject is delete',
                success: success != null,
                subjectID: request.params.id
            })
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                debug_error: error.message,
            })
        }
    }


}
module.exports = SubjectController
