const questions = [
    {
        question: "축제 소식이 들리면 나는?",
        answers: {
            A: { text: '"몇 시에 시작이야? 누구랑 가?"', type: 'EJ' },
            B: { text: '"사람 많겠네... 근데 재밌긴 하겠다."', type: 'IP' },
            C: { text: '"뭐 있는지 검색부터 해봐야지."', type: 'IJ' },
            D: { text: '"그날 가봐서 분위기 봐야지~"', type: 'EP' }
        }
    },
    {
        question: "친구들이 부스를 돌자고 할 때 나는?",
        answers: {
            A: { text: "부스 지도 받아서 동선 짜는 중", type: 'J' },
            B: { text: "친구 따라가면 되지~", type: 'P' },
            C: { text: "인기 많은 부스 먼저 체크함", type: 'T' },
            D: { text: "재밌어 보이는 곳? 감으로 간다!", type: 'F' }
        }
    },
    {
        question: "포토존 앞에 섰을 때 나는?",
        answers: {
            A: { text: "사진 찍을 사람 모집하고 각도 체크함", type: 'EJ' },
            B: { text: "사진은 부끄러운데... 찍어줄게!", type: 'IS' },
            C: { text: "그림자 없는 시간 기다려서 찍음", type: 'IN' },
            D: { text: "무조건 찰칵! 이 순간이 중요해~", type: 'ES' }
        }
    },
    {
        question: "음식을 고를 때 나는?",
        answers: {
            A: { text: "혼잡도, 대기시간, 리뷰까지 고려함", type: 'TJ' },
            B: { text: "눈에 띄는 거 그냥 사 먹는다", type: 'FP' },
            C: { text: "새롭고 독특한 메뉴를 찾아간다", type: 'NP' },
            D: { text: "가장 익숙한 메뉴, 실패 확률 0%", type: 'SJ' }
        }
    },
    {
        question: "사람이 너무 많아서 길이 막혔다! 나는?",
        answers: {
            A: { text: "즉시 우회로를 찾아 친구들을 이끈다", type: 'EJ' },
            B: { text: "수다 떨며 그냥 기다린다", type: 'EP' },
            C: { text: "공간이 답답해서 살짝 멀어짐", type: 'IP' },
            D: { text: "그 틈에서 부스 정보를 다시 확인함", type: 'IJ' }
        }
    },
    {
        question: "갑자기 비가 온다면 나는?",
        answers: {
            A: { text: "우산 나눠주며 사람 챙김", type: 'FJ' },
            B: { text: "나부터 비 피하고 생각함", type: 'TP' },
            C: { text: "비도 경험이지~ 그대로 즐김", type: 'FP' },
            D: { text: "왜 우산이 없었을까 분석함", type: 'TJ' }
        }
    },
    {
        question: "스탭이 말을 걸어온다면 나는?",
        answers: {
            A: { text: "바로 대답하고 역질문함", type: 'E' },
            B: { text: "고개 끄덕이며 미소만", type: 'I' },
            C: { text: "말 걸 이유를 궁금해함", type: 'N' },
            D: { text: "뭔가 도와줘야 하나 고민함", type: 'S' }
        }
    },
    {
        question: "축제 끝나고 나의 모습은?",
        answers: {
            A: { text: "인스타 정리 + 단톡 후기 공유", type: 'EJ' },
            B: { text: "사진 정리하며 혼자 회상", type: 'IJ' },
            C: { text: "재밌는 포인트 위주로 리뷰 남김", type: 'TP' },
            D: { text: "아무 말 없이 조용히 마음에 저장", type: 'IN' }
        }
    }
];

let current = 0;
let scores = {};

function renderQuestion() {
    const q = questions[current];
    document.getElementById('question-title').innerText = `Q${current + 1}`;
    document.getElementById('question-text').innerText = q.question;

    const opts = document.querySelectorAll('.options button');
    let i = 0;
    for (let key in q.answers) {
        opts[i].innerText = `${key}. ${q.answers[key].text}`;
        opts[i].onclick = () => selectAnswer(key);
        i++;
    }
}

function selectAnswer(key) {
    const type = questions[current].answers[key].type;
    for (let t of type) {
        scores[t] = (scores[t] || 0) + 1;
    }

    current++;
    if (current < questions.length) {
        renderQuestion();
    } else {
        const resultType = getMbti(scores);
        localStorage.setItem('mbtiResult', resultType);
        window.location.href = '/result';
    }
}

function getMbti(score) {
    const pairs = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']];
    return pairs.map(([a, b]) => (score[a] || 0) >= (score[b] || 0) ? a : b).join('');
}

window.onload = renderQuestion;