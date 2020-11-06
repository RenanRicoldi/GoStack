import { startOfHour } from 'date-fns'
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

/**
 * Recebimento das informações
 * Tratativa de erros/excessões
 * Acesso ao repositório
 */

interface Request {
    provider: string
    date: Date
}

/**
 * Dependency inversion -> sempre que nosso service tiver uma dependência externa, -->
 * --> ao invés de instanciar novamente a classe, nós recebemos ela como parâmetro.
 */

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository
    }

    public execute({ date, provider }: Request): Appointment {
        const appointmentDate = startOfHour(date)

        const findAppointmentinSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        )

        if (findAppointmentinSameDate) {
            throw Error('This appointment is already booked')
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        })

        return appointment
    }
}

export default CreateAppointmentService
