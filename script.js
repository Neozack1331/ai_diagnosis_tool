// 全ての質問のプール
const allQuestions = [
    // 学習型の質問
    {
        question: "新しい技術を学ぶことが好きですか？",
        category: "学習型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "詳細な説明を好むタイプですか？",
        category: "学習型",
        options: [
            {
                text: "非常に好みます",
                value: 3
            },
            {
                text: "まあ好みます",
                value: 2
            },
            {
                text: "あまり好みません",
                value: 1
            },
            {
                text: "全く好みません",
                value: 0
            }
        ]
    },
    {
        question: "複雑な問題を解決するのが好きですか？",
        category: "学習型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "新しい知識を常に求めますか？",
        category: "学習型",
        options: [
            {
                text: "常に求めています",
                value: 3
            },
            {
                text: "まあ求めています",
                value: 2
            },
            {
                text: "あまり求めていません",
                value: 1
            },
            {
                text: "全く求めていません",
                value: 0
            }
        ]
    },
    {
        question: "新しいことへの挑戦が好きですか？",
        category: "学習型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "自己学習を重視しますか？",
        category: "学習型",
        options: [
            {
                text: "非常に重視しています",
                value: 3
            },
            {
                text: "まあ重視しています",
                value: 2
            },
            {
                text: "あまり重視していません",
                value: 1
            },
            {
                text: "全く重視していません",
                value: 0
            }
        ]
    },
    {
        question: "情報収集が得意ですか？",
        category: "学習型",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    
    // クリエイティブ型の質問
    {
        question: "クリエイティブな作業を好むタイプですか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "新しいアイデアを思いつくことが得意ですか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "アートやデザインに興味がありますか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に興味があります",
                value: 3
            },
            {
                text: "まあ興味があります",
                value: 2
            },
            {
                text: "あまり興味がありません",
                value: 1
            },
            {
                text: "全く興味がありません",
                value: 0
            }
        ]
    },
    {
        question: "創造的な解決策を思いつくことが得意ですか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "新しいアイデアを形にするのが得意ですか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "既存の枠組みにとらわれない思考が好きですか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "視覚的な表現が得意ですか？",
        category: "クリエイティブ",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    
    // 効率重視型の質問
    {
        question: "効率的な作業を重視しますか？",
        category: "効率重視",
        options: [
            {
                text: "非常に重視しています",
                value: 3
            },
            {
                text: "まあ重視しています",
                value: 2
            },
            {
                text: "あまり重視していません",
                value: 1
            },
            {
                text: "全く重視していません",
                value: 0
            }
        ]
    },
    {
        question: "システム化された作業が得意ですか？",
        category: "効率重視",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "スケジュールを守ることが得意ですか？",
        category: "効率重視",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "時間管理が得意ですか？",
        category: "効率重視",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "作業効率を重視しますか？",
        category: "効率重視",
        options: [
            {
                text: "非常に重視しています",
                value: 3
            },
            {
                text: "まあ重視しています",
                value: 2
            },
            {
                text: "あまり重視していません",
                value: 1
            },
            {
                text: "全く重視していません",
                value: 0
            }
        ]
    },
    {
        question: "タスクを整理して進めるのが好きですか？",
        category: "効率重視",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "自動化できるものは自動化したいと思いますか？",
        category: "効率重視",
        options: [
            {
                text: "非常にそう思います",
                value: 3
            },
            {
                text: "まあそう思います",
                value: 2
            },
            {
                text: "あまりそう思いません",
                value: 1
            },
            {
                text: "全くそう思いません",
                value: 0
            }
        ]
    },
    
    // チーム型の質問
    {
        question: "チームでの作業を好むタイプですか？",
        category: "チーム型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "他者と協力して作業するのが好きですか？",
        category: "チーム型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "他者の意見を尊重しますか？",
        category: "チーム型",
        options: [
            {
                text: "非常に尊重します",
                value: 3
            },
            {
                text: "まあ尊重します",
                value: 2
            },
            {
                text: "あまり尊重しません",
                value: 1
            },
            {
                text: "全く尊重しません",
                value: 0
            }
        ]
    },
    {
        question: "他者とのコミュニケーションが得意ですか？",
        category: "チーム型",
        options: [
            {
                text: "非常に得意です",
                value: 3
            },
            {
                text: "まあ得意です",
                value: 2
            },
            {
                text: "あまり得意ではありません",
                value: 1
            },
            {
                text: "全く得意ではありません",
                value: 0
            }
        ]
    },
    {
        question: "チームワークを大切にしますか？",
        category: "チーム型",
        options: [
            {
                text: "非常に大切にしています",
                value: 3
            },
            {
                text: "まあ大切にしています",
                value: 2
            },
            {
                text: "あまり大切にしていません",
                value: 1
            },
            {
                text: "全く大切にしていません",
                value: 0
            }
        ]
    },
    {
        question: "グループでのブレインストーミングが好きですか？",
        category: "チーム型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    },
    {
        question: "プロジェクトを共同で進めるのが好きですか？",
        category: "チーム型",
        options: [
            {
                text: "非常に好きです",
                value: 3
            },
            {
                text: "まあ好きです",
                value: 2
            },
            {
                text: "あまり好きではありません",
                value: 1
            },
            {
                text: "全く好きではありません",
                value: 0
            }
        ]
    }
];

// 診断開始時に質問をランダムに選択する関数
function selectRandomQuestions() {
    return allQuestions
        .map(question => ({ ...question }))
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);
}

// 4つのユーザータイプの定義
const userTypes = {
    "イノベーター型": {
        baseCategory: "クリエイティブ",
        description: "あなたは新しいアイデアを生み出すことに長けた「イノベーター型」です。創造性が高く、常に新しい可能性を探求することを好みます。既存の枠組みにとらわれない思考ができ、独創的な解決策を見つけることができます。",
        explanation: "あなたの回答から、創造的な思考や新しいアイデアを生み出すことに高い関心があることがわかりました。既存の枠組みにとらわれない発想力と、新しいものを生み出す意欲が特徴的です。",
        recommendations: [
            "DALL-E - 画像生成AI（あなたの創造性をビジュアル化するのに最適）",
            "Jasper - コンテンツ生成AI（独創的な文章作成をサポート）",
            "Midjourney - アート生成AI（あなたのアイデアを芸術作品に変換）"
        ],
        image: "code.jpg"
    },
    "エフィシェント型": {
        baseCategory: "効率重視",
        description: "あなたは効率と生産性を重視する「エフィシェント型」です。時間管理に優れ、最小限の労力で最大の成果を出すことを得意としています。自動化や最適化を好み、効率的なワークフローを構築することに関心があります。",
        explanation: "あなたの回答から、効率的な作業プロセスや時間管理を重視する傾向が強いことがわかりました。無駄を省き、合理的に物事を進めることを好む特性が顕著です。",
        recommendations: [
            "Notion - プロジェクト管理AI（効率的なタスク管理と情報整理が可能）",
            "Gmail - AIメールアシスタント（コミュニケーションの効率化をサポート）",
            "Trello - タスク管理AI（視覚的で効率的なタスク管理を実現）"
        ],
        image: "feel.jpg"
    },
    "ナレッジシーカー型": {
        baseCategory: "学習型",
        description: "あなたは知識を追求する「ナレッジシーカー型」です。新しい情報を学び、深く理解することに喜びを感じます。詳細な説明を好み、複雑な問題に取り組むことを楽しむ傾向があります。常に知識を更新し、自己成長を続けることを重視しています。",
        explanation: "あなたの回答から、新しい知識を獲得することや、詳細な情報を理解することに強い関心があることがわかりました。学習意欲が高く、知的好奇心が旺盛な特性が見られます。",
        recommendations: [
            "ChatGPT - ジェネラルAIアシスタント（幅広い知識を得るのに最適）",
            "DeepSeek - 検索エンジンAI（深い知識探索をサポート）",
            "Wolfram Alpha - 知識ベースAI（専門的な情報を正確に提供）"
        ],
        image: "seeker.jpg"
    },
    "コラボレーター型": {
        baseCategory: "チーム型",
        description: "あなたは協力と共創を重視する「コラボレーター型」です。他者との協働を通じて価値を生み出すことに長けています。コミュニケーション能力が高く、多様な意見を尊重し、チームの力を最大化することができます。",
        explanation: "あなたの回答から、他者との協力やコミュニケーションを重視する傾向が強いことがわかりました。チームワークを大切にし、多様な視点を取り入れることを好む特性が顕著です。",
        recommendations: [
            "Slack - チームコミュニケーションAI（効果的なチーム連携をサポート）",
            "Microsoft Teams - ミーティングAI（リモートでの協働作業に最適）",
            "Asana - チームプロジェクト管理AI（チーム全体の進捗管理に役立つ）"
        ],
        image: "fun.jpg"
    }
};

// 元のAIタイプとの互換性のためのマッピング
const aiTypes = {
    "クリエイティブ": userTypes["イノベーター型"],
    "効率重視": userTypes["エフィシェント型"],
    "学習型": userTypes["ナレッジシーカー型"],
    "チーム型": userTypes["コラボレーター型"]
};

// DOM要素
const topSection = document.getElementById('top-section');
const quizSection = document.getElementById('quiz-section');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const progress = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const backBtn = document.getElementById('back-btn');
const resultSection = document.getElementById('result-section');
const resultText = document.getElementById('result-text');
const resultImageContainer = document.getElementById('result-image-container');
const aiRecommendations = document.getElementById('ai-recommendations');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

// 状態管理
let currentQuestionIndex = 0;
let answers = [];
let questions = [];
let answerHistory = []; // 回答履歴を保存する配列

// 診断を開始する関数
function startDiagnosis() {
    topSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    
    // 質問をランダムに選択
    questions = selectRandomQuestions();
    currentQuestionIndex = 0;
    answers = [];
    answerHistory = [];
    backBtn.disabled = true;
    showQuestion();
}

// 質問を表示する関数
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // 進捗テキストを更新
    progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    
    // 進捗バーを更新
    progress.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    
    // 戻るボタンの状態を更新
    backBtn.disabled = currentQuestionIndex === 0;
    
    // 回答ボタンを表示
    answerButtons.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('answer-btn');
        
        // 前に選択した回答があれば、そのボタンを選択状態にする
        const previousAnswer = answerHistory[currentQuestionIndex];
        if (previousAnswer && previousAnswer.answer === option.text) {
            button.classList.add('selected');
        }
        
        button.onclick = () => selectAnswer(option, index);
        answerButtons.appendChild(button);
    });
}

// 回答を選択した時の処理
function selectAnswer(option, index) {
    // すべてのボタンから選択状態を解除
    const buttons = answerButtons.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // 選択したボタンを選択状態にする
    buttons[index].classList.add('selected');
    
    // 回答を保存
    const answer = {
        question: questions[currentQuestionIndex].question,
        answer: option.text,
        value: option.value,
        category: questions[currentQuestionIndex].category
    };
    
    // 現在のインデックスに回答を保存
    answerHistory[currentQuestionIndex] = answer;
    
    // 少し遅延させて次の質問に進む
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            // 回答履歴から回答配列を作成
            answers = answerHistory.filter(a => a !== undefined);
            showResults();
        }
    }, 300);
}

// 前の質問に戻る関数
function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResults() {
    // 診断ロジックを実装
    const score = calculateScore(answers);
    const aiType = determineAiType(score);
    const userType = determineUserType(aiType);
    
    // 各タイプの最大スコアを計算
    const maxPossibleScore = 5 * 3; // 5問の各カテゴリで最大値は3
    
    // スコアのパーセンテージを計算
    const percentages = {
        learning: Math.round((score.learning / maxPossibleScore) * 100),
        creative: Math.round((score.creative / maxPossibleScore) * 100),
        efficient: Math.round((score.efficient / maxPossibleScore) * 100),
        team: Math.round((score.team / maxPossibleScore) * 100)
    };
    
    // ユーザータイプの説明を取得
    const typeExplanation = userTypes[userType].explanation;
    
    // 結果を表示
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    // ユーザータイプの結果を表示
    const typeInfo = userTypes[userType];
    
    // 結果画像を表示（点滅しないように通常のクラスを使用）
    const resultImageHTML = `
        <img src="img/${typeInfo.image}" alt="${userType}" class="result-image">
    `;
    resultImageContainer.innerHTML = resultImageHTML;
    
    let resultHTML = `
        <div class="user-type-result" style="border-left-color: ${getColorForType(typeInfo.baseCategory)}">
            <h3>${userType}</h3>
            <p class="user-type-description">${typeInfo.description}</p>
        </div>
        
        <div class="score-summary">
            <h3>あなたのAIタイプ分析</h3>
            <div class="score-bars">
                <div class="score-bar">
                    <div class="score-bar-header">
                        <span>ナレッジシーカー型</span>
                        <span id="learning-percentage" class="score-percentage">0%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar" id="learning-bar"></div>
                    </div>
                </div>
                
                <div class="score-bar">
                    <div class="score-bar-header">
                        <span>イノベーター型</span>
                        <span id="creative-percentage" class="score-percentage">0%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar" id="creative-bar"></div>
                    </div>
                </div>
                
                <div class="score-bar">
                    <div class="score-bar-header">
                        <span>エフィシェント型</span>
                        <span id="efficient-percentage" class="score-percentage">0%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar" id="efficient-bar"></div>
                    </div>
                </div>
                
                <div class="score-bar">
                    <div class="score-bar-header">
                        <span>コラボレーター型</span>
                        <span id="team-percentage" class="score-percentage">0%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar" id="team-bar"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="result-explanation">
            <h3>あなたの特性</h3>
            <p>${typeInfo.explanation}</p>
        </div>
    `;
    
    resultText.innerHTML = resultHTML;
    
    // AIツールのレコメンデーションを表示
    let recommendationsHTML = `
        <h3>おすすめのAIツール</h3>
        <div class="ai-recommendation-list">
    `;
    
    typeInfo.recommendations.forEach(rec => {
        recommendationsHTML += `
            <div class="ai-recommendation" style="border-left-color: ${getColorForType(typeInfo.baseCategory)}">
                ${rec}
            </div>
        `;
    });
    
    recommendationsHTML += `</div>`;
    aiRecommendations.innerHTML = recommendationsHTML;
    
    // アニメーションでバーを表示
    setTimeout(() => {
        document.getElementById('learning-bar').style.width = `${percentages.learning}%`;
        document.getElementById('learning-percentage').textContent = `${percentages.learning}%`;
        document.getElementById('learning-percentage').classList.add('visible');
        
        setTimeout(() => {
            document.getElementById('creative-bar').style.width = `${percentages.creative}%`;
            document.getElementById('creative-percentage').textContent = `${percentages.creative}%`;
            document.getElementById('creative-percentage').classList.add('visible');
            
            setTimeout(() => {
                document.getElementById('efficient-bar').style.width = `${percentages.efficient}%`;
                document.getElementById('efficient-percentage').textContent = `${percentages.efficient}%`;
                document.getElementById('efficient-percentage').classList.add('visible');
                
                setTimeout(() => {
                    document.getElementById('team-bar').style.width = `${percentages.team}%`;
                    document.getElementById('team-percentage').textContent = `${percentages.team}%`;
                    document.getElementById('team-percentage').classList.add('visible');
                }, 300);
            }, 300);
        }, 300);
    }, 500);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    answers = [];
    progress.style.width = '0%';
    quizSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    
    // 質問を再度ランダムに選択
    questions = selectRandomQuestions();
    showQuestion();
}

function returnToHome() {
    resultSection.classList.add('hidden');
    topSection.classList.remove('hidden');
}

function calculateScore(answers) {
    // スコア計算ロジックを実装
    const score = {
        creative: 0,
        efficient: 0,
        learning: 0,
        team: 0
    };
    
    // 各カテゴリの回答数をカウント
    const categoryCount = {
        "学習型": 0,
        "クリエイティブ": 0,
        "効率重視": 0,
        "チーム型": 0
    };
    
    answers.forEach(answer => {
        // 各カテゴリの質問数をカウント
        categoryCount[answer.category]++;
        
        // 回答の値に基づいてスコアを加算
        switch(answer.category) {
            case "学習型":
                score.learning += answer.value;
                break;
            case "クリエイティブ":
                score.creative += answer.value;
                break;
            case "効率重視":
                score.efficient += answer.value;
                break;
            case "チーム型":
                score.team += answer.value;
                break;
        }
    });
    
    return score;
}

function determineAiType(score) {
    // スコアが最も高いタイプを決定
    const scoreMap = {
        learning: "学習型",
        creative: "クリエイティブ",
        efficient: "効率重視",
        team: "チーム型"
    };
    
    // 最大スコアのキーを取得
    const maxType = Object.keys(score).reduce((a, b) => 
        score[a] > score[b] ? a : b
    );
    
    return scoreMap[maxType];
}

function determineUserType(aiType) {
    // AIタイプからユーザータイプへの変換
    const typeMap = {
        "学習型": "ナレッジシーカー型",
        "クリエイティブ": "イノベーター型",
        "効率重視": "エフィシェント型",
        "チーム型": "コラボレーター型"
    };
    
    return typeMap[aiType];
}

// 各タイプに対応する色を返す関数
function getColorForType(category) {
    const colorMap = {
        "学習型": "#2196F3",
        "クリエイティブ": "#FF9800",
        "効率重視": "#4CAF50",
        "チーム型": "#9C27B0"
    };
    
    return colorMap[category] || "#333";
}

// イベントリスナーの設定
startBtn.addEventListener('click', startDiagnosis);
backBtn.addEventListener('click', goBack);
restartBtn.addEventListener('click', restartQuiz);
homeBtn.addEventListener('click', returnToHome);
