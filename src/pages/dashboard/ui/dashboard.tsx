import { Stack } from '../../../shared/stack'
import style from './dashboard.module.scss'

export const DashboardPage = () => {
    return (
        <Stack dir='column' className = {style.receipt}>
            <div>
                название чека
            </div>
            <div>
                разделительная строка
            </div>
            <Stack dir='row'>
                <div>
                    категория 1
                </div>
                <div>
                    категория 2
                </div>
                <div>
                    категория 3
                </div>
            </Stack>
            <Stack dir='row'>
                товар
                цена
            </Stack>
            <div>
                разделительная строка
            </div>
            <div>
                разделительная строка
            </div>
            <div>
                кнопка добавить строку
            </div>
            <div>
                разделительная строка
            </div>
            <Stack dir='row'>
                <div>
                    дата:
                </div>
                <div>
                    дата
                </div>
                <Stack dir='column'>
                    <div>
                        итого
                        </div>
                    <div>
                        итог цена
                        </div>
                </Stack>
            </Stack>
            <div>
                кнопка сохранить чек
            </div>
        </Stack>
    )
}