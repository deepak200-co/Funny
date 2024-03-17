import React, { useState, useEffect } from 'react';
import './Question.css';

function QuestionComponent() {
    const [answer, setAnswer] = useState('');
    const [noResponses, setNoResponses] = useState([
        "No",
        "mari bettu cheyaku",
        "Nijanga vodhu aa😨",
        "Arey nuvu intha heartless aa 😞",
        "Ila anaka kuda no koduthunav aa 😒",
        "Nduku antha pogaru 🤔",
        "Inkokasari alochinchu pls 😌🙏🏻",
        "Intha ego aa 🤨",
        "Chi peh 😕🫤",
        "Sareley Sorry😞",
        "Mali aduguthuna think chesi tell😨"
    ]);
    const [noResponseIndex, setNoResponseIndex] = useState(0);
    const [yesButtonSize, setYesButtonSize] = useState(18);
    const [loading, setLoading] = useState(false);
    const [showHappyGif, setShowHappyGif] = useState(false);

    useEffect(() => {
        if (answer === 'Yes') {

            setTimeout(() => {
                setShowHappyGif(true);
                setLoading(false);
            }, 2000);
        }
    }, [answer]);

    const handleNoClick = () => {
        const nextResponseIndex = (noResponseIndex + 1) % noResponses.length;
        setAnswer(noResponses[nextResponseIndex]);
        setNoResponseIndex(nextResponseIndex);
        increaseYesButtonSize();
    };

    const handleYesClick = () => {
        setLoading(true);
        setTimeout(() => {
            setAnswer('Yes');
        }, 2000);
    };

    const increaseYesButtonSize = () => {
        setYesButtonSize(yesButtonSize + 10);
    };

    return (
        <div>
            {(!loading && !showHappyGif) && (
                <h2>Eroju afternoon lunch ki veldham aa ? 😥😥</h2>
            )}
            {!loading && !showHappyGif && (
                <>
                    <button onClick={handleNoClick} className="option-button">{noResponses[noResponseIndex]}</button>
                    <button onClick={handleYesClick} style={{ fontSize: `${yesButtonSize}px` }} className="option-button">Yes</button>
                </>
            )}
            {loading && (
                <div>
                    <img src="https://media1.tenor.com/m/O53wM5VicCEAAAAC/heart-loading.gif" alt="Loading GIF" />
                </div>
            )}
            {showHappyGif && (
                <div className="happy-gif-text">
                    <img src="https://media.tenor.com/E4od4SG3hjMAAAAi/bunny-bunnies.gif" alt='Kiss GiF' />
                    <p className="fade-in"><h2>Awww! Baby love you😘😘🥰💗</h2></p>
                  /*  <img src="https://media.tenor.com/eiMqmu0vXz8AAAAi/kiss.gif" alt="Happy GIF" />*/
                    </div>
            )}
            {answer === '' && !loading && (
                <p>Em antav</p>
            )}
        </div>
    );
}

export default QuestionComponent;

