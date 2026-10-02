import clsx from 'clsx';
import { useState, type FC } from 'react';

import style from './create-new-envelope.module.scss';

import { Button } from '@/shared/ui/button';
import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';
import { Tape } from '@/shared/ui/tape';

const colorsMock = [
    'rgb(201, 111, 74)',
    'rgb(95, 131, 166)',
    'rgb(138, 123, 176)',
    'rgb(217, 154, 61)',
    'rgb(196, 106, 138)',
    'rgb(109, 138, 90)',
    'rgb(74, 158, 148)',
    'rgb(138, 123, 176)',
];
const iconsMock = ['🏠', '🍜', '🚗', '🎉', '🌿', '💼'];

type Props = {
    onClick: () => void;
};

export const CreateNewEnvelope: FC<Props> = ({ onClick }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
        null,
    );
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    return (
        <div className={style.card}>
            <Tape color="rgba(196, 106, 138)" placement="center" size="big" />
            <Stack style={{ width: '100%' }} dir="column">
                <Stack alignItems="center" dir="row" className={style.row}>
                    <div className={style.name}>новый конверт</div>
                    <Button onClick={onClick} appearance="round">
                        ×
                    </Button>
                </Stack>
                <Spacer height={20} />
                <Stack gap={16} dir="column">
                    <Stack dir="column" gap={6} className={style.inputWrapper}>
                        <div className={style.label}>НАЗВАНИЕ</div>
                        <input className={style.input} />
                    </Stack>
                    <Stack dir="column" gap={6} className={style.inputWrapper}>
                        <div className={style.label}>МЕСЯЧНЫЙ ЛИМИТ, ₽</div>
                        <input type="number" className={style.input} />
                    </Stack>
                    <Stack dir="column" gap={6} className={style.inputWrapper}>
                        <div className={style.label}>ЦВЕТ</div>
                        <Stack gap={12} dir="row">
                            {colorsMock.map((color, index) => (
                                <div
                                    key={color}
                                    className={clsx(
                                        style.color,
                                        selectedColorIndex === index &&
                                            style.selected,
                                    )}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColorIndex(index)}
                                />
                            ))}
                        </Stack>
                    </Stack>
                    <Stack dir="column" gap={6} className={style.inputWrapper}>
                        <div className={style.label}>ИКОНКА</div>
                        <Stack dir="row" gap={6}>
                            {iconsMock.map((icon) => (
                                <button
                                    key={icon}
                                    onClick={() => setSelectedIcon(icon)}
                                    className={clsx(
                                        style.iconButton,
                                        selectedIcon === icon &&
                                            style.iconButtonSelected,
                                    )}
                                >
                                    {icon}
                                </button>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
                <Spacer height={20} />
                <Button
                    style={{ backgroundColor: '#6d8a5a' }}
                    appearance={'primary'}
                    className={style.button}
                >
                    создать конверт
                </Button>
            </Stack>
        </div>
    );
};
