import React, { useState } from 'react';
import styles from './StyleQuiz.module.css';

const quizSteps = [
  {
    question: "What is your primary architectural aesthetic?",
    options: [
      { label: "Monolithic & Brutalist (Heavy wools, structure, dark tones)", profile: "Brutalist Monolith" },
      { label: "Fluid & Soft Minimalist (Raw silks, neutral cashmeres, drape)", profile: "Fluid Minimalist" },
      { label: "Sharp & Tailored (Structured evening blazers, sharp lapels)", profile: "Sharp Tailored" }
    ]
  },
  {
    question: "What setting defines your primary wardrobe needs?",
    options: [
      { label: "Metropolitan boardrooms and private evening galas", profile: "Gala & Boardroom" },
      { label: "Quiet art galleries, architecture tours, and atelier sessions", profile: "Atelier & Gallery" },
      { label: "International travel and secluded coastal retreats", profile: "Resort & Travel" }
    ]
  }
];

const StyleQuiz = ({ isOpen, onClose, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (option) => {
    const nextAnswers = [...answers, option.profile];
    setAnswers(nextAnswers);

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setCompleted(false);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>✕</button>

        {!completed ? (
          <div>
            <p className={styles.stepIndicator}>Private Consultation — Step {currentStep + 1} of {quizSteps.length}</p>
            <h2 className={styles.questionTitle}>{quizSteps[currentStep].question}</h2>
            
            <div className={styles.optionsGrid}>
              {quizSteps[currentStep].options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleSelectOption(option)}
                  className={styles.optionBtn}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.resultsContainer}>
            <span className={styles.resultTag}>Curated Profile Generated</span>
            <h2 className={styles.resultTitle}>Your Persona: The Quiet Visionary</h2>
            <p className={styles.resultDescription}>
              Based on your preference for structural tailoring and refined silhouettes, our master stylist recommends exploring our permanent collection and raw silk archival drops.
            </p>
            <button 
              onClick={() => {
                onClose();
                if (onNavigate) onNavigate('shop');
              }}
              className={styles.actionBtn}
            >
              Explore Tailored Catalog →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleQuiz;