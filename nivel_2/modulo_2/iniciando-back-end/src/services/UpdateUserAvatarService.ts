import { getRepository } from 'typeorm'
import path from 'path'
import fs from 'fs'

import uploadConfig from '../config/upload'
import User from '../models/User'
import AppError from '../errors/AppError'

interface Request {
    user_id: string
    avatarFilename: string
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: Request): Promise<User> {
        const userRepository = getRepository(User)

        const user = await userRepository.findOne(user_id)

        if (!user) {
            throw new AppError(
                'Only authenticated users can change avatar',
                401,
            )
        }

        try {
            if (user.avatar) {
                const userAvatarFilePath = path.join(
                    uploadConfig.directory,
                    user.avatar,
                )
                let userAvatarFileExist = false
                try {
                    await fs.promises.access(
                        userAvatarFilePath,
                        fs.constants.F_OK,
                    )

                    userAvatarFileExist = true
                } catch (error) {
                    userAvatarFileExist = false
                }

                if (userAvatarFileExist) {
                    await fs.promises.unlink(userAvatarFilePath)
                }
            }
        } catch (error) {
            console.log('')
        }

        user.avatar = avatarFilename

        return user
    }
}

export default UpdateUserAvatarService
