// result.js

const mbtiResults = {
    "ISTJ": {
        "title": "계획대로 움직이는 전공 마스터",
        "description": "축제에도 스케줄표는 필수! 부스 참여도 시간 맞춰 딱딱.\n🎁 오늘만큼은 계획을 내려두고, 마음 가는 대로 즐겨보세요.",
        "img": "/images/istj.png"
    },
    "ISFJ": {
        "title": "조용한 배려, 부스의 숨은 조력자",
        "description": "물 뿌리고 의자 정리하고... 축제 운영의 그림자 천사.\n🎁 늘 모두를 챙기느라 수고했어요. 이번엔 당신이 즐길 차례예요.",
        "img": "/images/isfj.png"
    },
    "INFJ": {
        "title": "감성 한 스푼, 의미 찾는 부스 철학자",
        "description": "축제 콘셉트에 철학 담고, 엠블럼 의미까지 생각하는 타입.\n🎁 당신의 생각은 깊고 아름다워요. 그 감성, 축제에서 반짝일 거예요.",
        "img": "/images/infj.png"
    },
    "INTJ": {
        "title": "효율 만렙 기획자",
        "description": "축제 기획 단계부터 동선, 부스 수익까지 전략적 접근.\n🎁 계획대로 되지 않아도 괜찮아요. 축제는 그 자체로 특별하니까요.",
        "img": "/images/intj.png"
    },
    "ISTP": {
        "title": "무대 세팅의 묵묵한 장인",
        "description": "기계 설치, 음향 세팅… 말 없이 움직이는 진정한 축제 실무자.\n🎁 당신의 손길이 이 축제를 완성했어요. 무대 밖에서도 박수 받아야죠.",
        "img": "/images/istp.png"
    },
    "ISFP": {
        "title": "감성 힐러, 축제 속 작은 위로",
        "description": "페이스페인팅 부스에서 조용히 그림 그려주는 따뜻한 손.\n🎁 조용한 마음 속에도 환한 빛이 있어요. 그 빛을 오늘은 더 빛나게 해요.",
        "img": "/images/isfp.png"
    },
    "INFP": {
        "title": "컨셉에 진심인 축제 낭만러",
        "description": "축제 포스터 한 줄 문구에 시적 영혼을 담는 타입.\n🎁 당신의 상상력이 이 축제를 더 감성 있게 만들었어요. 마음껏 표현해도 돼요.",
        "img": "/images/infp.png"
    },
    "INTP": {
        "title": "고장 난 기계도 분석 완료",
        "description": "축제 중 문제 생기면 누구보다 빠르게 원인 분석.\n🎁 머릿속에만 갇히지 말고, 오늘은 몸과 마음으로 즐겨보세요.",
        "img": "/images/intp.png"
    },
    "ESTP": {
        "title": "마이크 잡으면 분위기 후끈!",
        "description": "축제 사회, 이벤트 게임 MC는 이 유형의 무대.\n🎁 당신의 에너지가 모두를 웃게 해요. 오늘은 그 웃음을 마음껏 받아요.",
        "img": "/images/estp.png"
    },
    "ESFP": {
        "title": "여기가 바로 당신 무대!",
        "description": "축제 분위기 메이커, 부스 구경도 춤추듯 다니는 타입.\n🎁 사람들을 빛나게 하는 당신, 오늘은 그 중심에 서 있어도 괜찮아요.",
        "img": "/images/esfp.png"
    },
    "ENFP": {
        "title": "축제 아이디어 폭탄 제조기",
        "description": "“부스에 고양이 데려오는 건 어때?” 창의력 폭발.\n🎁 당신의 엉뚱함은 이 축제를 특별하게 만들어요. 계속 펑펑 터트려줘요!",
        "img": "/images/enfp.png"
    },
    "ENTP": {
        "title": "말 잘하는 축제 입담왕",
        "description": "굿즈 설명, 부스 홍보도 재치 있게 해결!\n🎁 당신의 말에는 힘이 있어요. 그 힘으로 나도 위로받았어요.",
        "img": "/images/entp.png"
    },
    "ESTJ": {
        "title": "축제 집행부의 중심",
        "description": "물자 관리, 인원 통솔, 시간 체크까지 책임감 만렙.\n🎁 모두를 위해 애쓴 만큼, 오늘은 당신도 주인공이 되어야 해요.",
        "img": "/images/estj.png"
    },
    "ESFJ": {
        "title": "부스의 분위기 리더",
        "description": "간식 챙기고 옆 사람 컨디션 체크, 다정한 케어러.\n🎁 다른 사람만큼, 당신 자신도 소중히 대해주세요.",
        "img": "/images/esfj.png"
    },
    "ENFJ": {
        "title": "모두가 의지하는 축제 히어로",
        "description": "진두지휘형 리더, “우리 이대로 가면 시간 맞아!”\n🎁 당신 덕분에 이 축제가 완성됐어요. 이제는 당신이 축제의 꽃이에요.",
        "img": "/images/enfj.png"
    },
    "ENTJ": {
        "title": "완벽한 기획서부터 수익 정산까지",
        "description": "축제 전부터 후까지 모든 걸 정리하는 마감왕.\n🎁 모든 걸 챙기느라 지쳤다면, 오늘은 아무것도 안 해도 괜찮아요.",
        "img": "/images/entj.png"
    }
};

const matchReasons = {
    INFJ: "🌿 당신의 깊은 감정선을 이해해줄 섬세한 친구예요.",
    ISFJ: "🎯 당신의 자유로운 감성에 따뜻한 현실감각을 더해줘요!",
    ENFP: "🔥 에너지 + 창의력 = 함께 있을 때 상상력이 폭발해요.",
    ISTP: "🛠️ 말은 적지만 행동으로 서로를 챙겨주는 쿨한 조합!",
    ISFP: "🌸 감성에 감성을 더하는 힐링 케미!",
    INTJ: "📐 냉철한 판단과 직관이 잘 맞는 최고의 전략 콤비!",
    ESFJ: "🤝 서로를 도와가며 단체 활동에서도 찰떡 호흡!",
    INTP: "🧠 생각이 꼬리에 꼬리를 물며 대화가 멈추질 않아요.",
    ESFP: "🎉 인싸력과 따뜻한 배려가 함께할 때 진짜 축제가 돼요!",
    ESTP: "🏃 즉흥 + 실행력! 함께 있으면 뭐든 저질러보고 싶어져요!",
    ENFJ: "📣 리더십과 감성 소통력이 서로를 끌어올려요.",
    ENTJ: "💼 강력한 추진력이 서로를 자극하는 멋진 궁합!",
    ISTJ: "🔒 안정감과 신뢰를 주는 진중한 동반자!",
    ESTJ: "📋 함께 계획 세우면 어떤 프로젝트든 성공해요.",
    ENTP: "🚀 엉뚱한 아이디어에 현실을 입히는 혁신 콤비!",
    INFP: "🎨 깊은 공감과 창의적 감성이 함께 빛나요!"
};

const mbtiMatches = {
    ENFP: ["INFJ", "ISFJ"],
    INFJ: ["ENFP", "ENFJ"],
    INTJ: ["ENFP", "ENTP"],
    INFP: ["ENFJ", "INFJ"],
    ESTP: ["ISFP", "ISTP"],
    ESFP: ["ISFJ", "ESFJ"],
    ENTJ: ["INTP", "ENTP"],
    ISFJ: ["ESFP", "ENFP"],
    ISTJ: ["ESFJ", "ISTP"],
    ENFJ: ["INFP", "ISFP"],
    ESFJ: ["ISTJ", "ISFJ"],
    ISTP: ["ESTP", "INTP"],
    ISFP: ["ESFP", "ENFP"],
    ENTP: ["INFJ", "INTP"],
    INTP: ["ENTP", "INTJ"],
    ESTJ: ["ISFJ", "ESFJ"]
};

function showResult() {
    const mbti = localStorage.getItem('mbtiResult');
    const result = mbtiResults[mbti];

    if (!result) {
        document.getElementById('result-type').innerText = '결과를 찾을 수 없습니다.';
        return;
    }

    document.getElementById('result-type').innerText = `${mbti} – ${result.title}`;
    document.getElementById('result-desc').innerText = result.description;
    document.getElementById('result-img').src = result.img;

    const matchContainer = document.getElementById('match-cards');
    matchContainer.innerHTML = '';
    const matchList = mbtiMatches[mbti];
    if (matchList) {
        matchList.forEach(matchType => {
            const match = mbtiResults[matchType];
            const reason = matchReasons[matchType] || "";
            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <img src="${match.img}" class="match-img" alt="${matchType}" />
                <p><strong>${matchType} – ${match.title}</strong></p>
                <p class="match-reason">${reason}</p>
            `;
            matchContainer.appendChild(card);
        });
    }
}

window.onload = showResult;