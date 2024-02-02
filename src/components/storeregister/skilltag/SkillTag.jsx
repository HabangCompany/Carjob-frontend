import React, { useState } from 'react';
import * as S from './SkillTag.style'
import { carService } from '../../../util/carservice';

const SkillTag = () => {
    const [selectedSkillList, setSelectedSkillList] = useState([])

    const seletedSkillHandler = (skill) => {
        const isSkillSelected = selectedSkillList.includes(skill)
        console.log(isSkillSelected)
        if (isSkillSelected) {
            setSelectedSkillList(prevSkill =>
                prevSkill.filter((selectedSkill) => selectedSkill !== skill)
            )
        } else {
            setSelectedSkillList((prevSkill) => [...prevSkill, skill])
        }
    }
    console.log(selectedSkillList)
    return (
        <div>
            <div>제공 서비스</div>
            <S.TagBox>
                {carService.map((skill) => {
                    return (
                        <S.Tags key={skill}
                            onClick={() => seletedSkillHandler(skill)}
                            selected={selectedSkillList.includes(skill)}
                        > {skill}</S.Tags>
                    )
                })}
            </S.TagBox>
        </div >
    );
};

export default SkillTag;