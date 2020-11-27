import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import AppError from '../errors/AppError'

/**
 * Recebimento das informações
 * Tratativa de erros/excessões
 * Acesso ao repositório
 */

interface Request {
    provider_id: string
    date: Date
}

/**
 * Dependency inversion -> sempre que nosso service tiver uma dependência externa, -->
 * --> ao invés de instanciar novamente a classe, nós recebemos ela como parâmetro.
 */

class CreateAppointmentService {
    public async execute({ date, provider_id }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentsRepository,
        )

        const appointmentDate = startOfHour(date)

        const findAppointmentinSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        )

        if (findAppointmentinSameDate) {
            throw new AppError('This appointment is already booked')
        }

        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        })

        await appointmentsRepository.save(appointment)

        return appointment
    }
}

export default CreateAppointmentService
