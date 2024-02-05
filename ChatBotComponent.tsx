import { useState } from "react"
import Message from '@mui/icons-material/Message';

const ChatBotComponent: React.FC = () => {
    const [showChat, setShowChat] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);



    const answers: { [key: string]: string } = {
        'La ce ora este clasa x?':' la ora cutare',
        'Cum va contactez?': 'la tel',
        "Ce se intampla daca ratez o sedinta? ": 'pierzi bani',
        "Se poate face antrenament separat?": 'lejer',
        "Cine este trainerul? ": 'tot ala',
        "Aveti prosoape?": 'Ntz',
        "E loc de parcare acolo?": 'E',
    }

    const toggleChat = () => {
        setShowChat(!showChat);
    }

    const handleQuestClick = (question: string) => {
        const answer = answers[question];
        setSelectedQuestion(question);
    }


    return (
        <div>
            <button className="chatButton" onClick={toggleChat}> <Message /></button>
            {showChat && (
                <div className="expandedChat">
                    <h3>Intrebari frecvente</h3>

                    <div className="questions">
                        {
                            Object.keys(answers).map((question) => (
                                <button className={`questBtn ${selectedQuestion ===question? 'selected': ''}`} key={question} onClick={() => handleQuestClick(question)}>- {question}</button>
                            ))
                        }
                    </div>
                 
                    {selectedQuestion && (
                        <div className="answer">
                            {/* <p>{selectedQuestion}</p> */}
                            <p>{answers[selectedQuestion]}</p>
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}

export default ChatBotComponent