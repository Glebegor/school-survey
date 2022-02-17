const questionDATA = [
    {
        title: 'Яка мова программування відноситься до ООП',
        answers: [
            {
                id: '1',
                value: 'C++',
                correct: true,
            },
            {
                id: '2',
                value: 'HTML',
                correct: false,
            },
            {
                id: '3',
                value: 'CSS',
                correct: false,
            }
            
        ]
    },
    {
        title: 'Що таке спадкування?',
        answers: [
            {
                id: '4',
                value: 'це підпрограма, що контролює ітерації в циклі.',
                correct: false,
            },
            {
                id: '5',
                value: 'це спеціальна конструкція, яка використовується для групування пов&prime;язаних змінних та функцій.',
                correct: false,
            },
            {
                id: '6',
                value: 'це один з принципів об&prime;єктно-орієнтовного програмування, який дає класу можливість використовувати програмний код іншого (базового) класу',
                correct: true,
            }
            
        ]
    },
    {
        title: 'Django це бібліотека мови программування...',
        answers: [
            {
                id: '7',
                value: 'Result 7',
                correct: true,
            },
            {
                id: '8',
                value: 'Rust',
                correct: false,
            },
            {
                id: '9',
                value: 'Ruby',
                correct: false,
            }
            
        ]
    },
    {
        title: 'Що таке консоль?',
        answers: [
            {
                id: '10',
                value: 'системна утиліта родини Windows NT, за допомогою якої можна слідкувати за роботою операційної системи та коригувати її',
                correct: false,
            },
            {
                id: '11',
                value: 'платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків',
                correct: false,
            },
            {
                id: '14',
                value: 'пристрій, який забезпечує взаємодію оператора комп&prime;ютера з операційною системою',
                correct: true,
            }
            
        ]
    },
    {
        title: 'Створення штучного інтерелку це...',
        answers: [
            {
                id: '15',
                value: 'Machine learning',
                correct: true,
            },
            {
                id: '16',
                value: 'Web-development',
                correct: false,
            },
            {
                id: '17',
                value: 'Software-development',
                correct: false,
            }
            
        ]
    },
    {
        title: 'Як імпортуровать модулі?',
        answers: [
            {
                id: '18',
                value: 'export...',
                correct: false,
            },
            {
                id: '19',
                value: 'import ... from &prime;/folder/file.js&prime;',
                correct: true,
            }
            
        ]
    },
    {
        title: 'Який движок працює на C++',
        answers: [
            {
                id: '22',
                value: 'Unity',
                correct: false,
            },
            {
                id: '23',
                value: 'Unreal Engine',
                correct: True,
            }
            
        ]
    },
    {
        title: 'Як правильно создавати класс?',
        answers: [
            {
                id: '24',
                value: 'NEWCLASS ClassName()',
                correct: false,
            },
            {
                id: '25',
                value: 'class ClassName{}',
                correct: true,
            },
            {
                id: '26',
                value: 'class{}',
                correct: false,
            }
            
        ]
    },
    {
        title: 'Що таке функція?',
        answers: [
            {
                id: '27',
                value: 'ключове поняття об&prime;єктно-орієнтованих технологій проектування та програмування; втілення абстрактної моделі окремої сутності',
                correct: false,
            },
            {
                id: '28',
                value: 'це фрагмент программного кода до якого можливо звернутися в різних куточках кода',
                correct: true,
            },
            {
                id: '29',
                value: 'набір інструкцій, які описують порядок дій виконавця, щоб досягти результату розв%prime;язання задачі',
                correct: false,
            }
            
        ]
    },
    {
        title: 'Що таке синтаксис комп$prime;ютерної мови?',
        answers: [
            {
                id: '30',
                value: 'використовуеться до загрузки контента до локального репозиторія в віддалений репозиторій',
                correct: false,
            },
            {
                id: '31',
                value: 'систематична перевірка вихідного коду програми',
                correct: false,
            },
            {
                id: '32',
                value: 'це сукупність правил, що визначають комбінації символів',
                correct: true,
            }
            
        ]
    },
]
let resultDATA = {};
const question = document.getElementById('question')
const nextQues = document.getElementById('nextQues')
const indicator = document.getElementById('indicator')
const quizzz = document.getElementById('quiz')
const restartQues = document.getElementById('restartQues')
var score = 0
const renderquiz = (index) => {
    renerInd(index + 1);

    question.dataset.currentStep = index

    const renderQuestion = () => questionDATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answerInput" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
        .join('');

    question.innerHTML = `
    <div id="questionStyle">
        <div class="quesTitle">${questionDATA[index].title}</div>
        <ul class="quesResults">${renderQuestion()}</ul>
    </div>    
    `;
};

const renderResult = () => {
    let content = '';

    const getClassname = (answer ,questionIndex) => {
        let classname='';

        if(!answer.correct && answer.id === resultDATA[questionIndex]){
            classname = 'FalseResult';
        }else if (answer.correct){
            classname = 'trueResult';
        };
        if (answer.correct && answer.id === resultDATA[questionIndex]){
            score++
        }

        return classname

    }

    const getAnswer = (questionIndex) => questionDATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');  

    questionDATA.forEach((question, index) => {
        content +=`
        <div id="questionStyle">
            <div class="quesTitle">${question.title}</div>
            <ul class="quesResults">${getAnswer(index)}</ul>
        </div>
                

        `;
    });
    indicator.innerHTML =`Правильных ответов: ${score}/${questionDATA.length}`;
    question.innerHTML = content;
};

const renerInd = (counter) => {
    indicator.innerHTML = `Осталось ответить ${counter}/${questionDATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answerInput')) {
        resultDATA[event.target.name] = event.target.value;
        nextQues.disabled = false;   

    }
});


renderquiz(Number(question.dataset.currentStep))


quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('nextQues')) {
        const nextQuesIndex = Number(question.dataset.currentStep) + 1;

        if(questionDATA.length === nextQuesIndex){
            nextQues.classList.add('nextQues_hide')
            question.classList.add('question_hide')
            restartQues.classList.add('restartQues_vis')
            indicator.classList.add('indicator_hide')
            question.classList.add('indicator_vis')
            renderResult()
        } else {
            renderquiz(nextQuesIndex); 
        }
        
        nextQues.disabled = true
    
    }

    if (event.target.classList.contains('restartQues')){
        console.log('restartQues')
    }
});



