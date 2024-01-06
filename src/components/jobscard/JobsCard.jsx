import React from 'react';
import * as S from './JobsCard.style'
import Store from '@/assets/storeimage.jpeg'

const JobsCard = () => {
    return (
        <S.Container>
            <S.ImageBox>
                <img src={Store} alt="" />
            </S.ImageBox>
            <S.DescriptionArea>
                <S.Title>윤진카센터</S.Title>
                <S.Article>가게설명입니다가게설명입니다가게설명입니다가게설명입니다</S.Article>
                <div>
                    거리 ...km
                </div>
                <div>
                    급여 100만원
                </div>
                <div>
                    경력 ..년
                </div>
                <div>
                    <S.Tag>
                        시공태그
                    </S.Tag>
                    <S.Tag>
                        시공태그
                    </S.Tag>
                </div>
            </S.DescriptionArea>
        </S.Container>
    );
};

export default JobsCard;